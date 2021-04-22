const deliveryTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addDeliveryTransaction,
    removeDeliveryTransaction,
    getAllDeliveryTransactions,
    getAllDeliveryByIdTransactions,
    updateDeliveryTransaction,
  });

  async function getAllDeliveryTransactions({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM "transactions" a INNER JOIN users b ON a.userid = b.userid WHERE "transactionType" = 'delivery' ORDER BY transactionid`;
        pool.query(sql, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });
      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function getAllDeliveryByIdTransactions({ id }) {
    try {
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `SELECT a.*, b."itemName", b."itemBarcode", b."itemDescription", b."itemPrice", c."userName" FROM "transactionItems" a INNER JOIN "items" b ON a."itemid" = b."itemid" INNER JOIN "users" c ON b.userid = c.userid WHERE a."transactionid" = $1`;
        let params = [id];
        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      return result;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function getId({ data }) {
    try {
      const pool = await connects();
      const result = await new Promise((resolve) => {
        const sql = `SELECT userid FROM users WHERE "userName" = $1`;
        let params = [data.userName];
        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });

      return result.rows[0].userid;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function addDeliveryTransaction({ data }) {
    var items = [];
    var transactionId = [];
    var finalResult = [];
    try {
      const pool = await connects();
      //add to deliveryTransaction Table
      let id = await getId({ data });

      const result = await new Promise((resolve) => {
        const sql = `INSERT INTO "transactions" (userid, "deliveryDate", "transactionDate", "grandTotal", "transactionType") VALUES ($1, $2, $3, $4, $5) RETURNING "transactionid"`;
        let params = [
          id,
          data.deliveryDate,
          data.dateAndTime,
          data.totalPrice,
          "delivery",
        ];

        pool.query(sql, params, (err, res) => {
          pool.end();
          if (err) resolve(err);
          resolve(res);
        });
      });
      transactionId.push(result.rows);

      //add items delivered to itemDeliveries table
      try {
        const pool = await connects();
        for (var i = 0; i < data.items.length; i++) {
          const result1 = await new Promise((resolve) => {
            const sql = `INSERT INTO "transactionItems" (itemid, "itemQuantity", "transactionid", "subTotal") VALUES ($1, $2, $3, $4) RETURNING itemid, "itemQuantity", "subTotal"`;
            let params = [
              data.items[i].id,
              data.items[i].selectedQuantity,
              result.rows[0].transactionid,
              data.items[i].subTotal,
            ];

            pool.query(sql, params, (err, res) => {
              //pool.end();
              if (err) resolve(err);
              resolve(res);
            });
          });

          items.push(result1.command, result1.rows);

          try {
            //Update the item quantity in item table according to how much of an item is delivered
            const pool = await connects();
            const result2 = await new Promise((resolve) => {
              const sql = `UPDATE "items" SET "itemQuantity" = "itemQuantity" + $1 WHERE itemid = $2 RETURNING "itemName", "itemPrice", "itemQuantity"`;
              let params = [data.items[i].selectedQuantity, data.items[i].id];
              pool.query(sql, params, (err, res) => {
                //pool.end();
                if (err) resolve(err);
                resolve(res);
              });
            });

            items.push(result2.command, result2.rows);
          } catch (e) {
            console.log("Error: ", e);
          }
        }
        //return { result };
      } catch (e) {
        console.log("Error: ", e);
      }
      console.log("print transaction id: ", transactionId[0]);
      finalResult.push(transactionId[0]);
      finalResult.push(items);

      return { finalResult };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function removeDeliveryTransaction({ id }) {
    try {
      // use sequelize on inserting
      const DeliveryTransaction = model.DeliveryTransactionModel;
      const res = await DeliveryTransaction.destroy({
        where: {
          transactionid: id,
        },
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  async function updateDeliveryTransaction({ data }) {
    var finalResult = [];
    try {
      let id = await getId({ data });
      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `UPDATE "transactions" SET "userid" = $2, "deliveryDate" = $3, "transactionDate" = $4, "grandTotal" = $5  WHERE "transactionid" = $1`;
        let params = [
          data.id,
          id,
          data.deliveryDate,
          data.dateAndTime,
          data.totalPrice,
        ];

        pool.query(sql, params, (err, res) => {
          pool.end();

          if (err) resolve(err);
          resolve(res);
        });
      });

      if (result) {
        try {
          const pool = await connects();
          for (var i = 0; i < data.items.length; i++) {
            const result1 = await new Promise((resolve) => {
              const sql = `UPDATE "transactionItems" SET "itemQuantity" = "itemQuantity" - $2, "subTotal" = $4 WHERE itemid = $1 AND "transactionid" = $3 returning "itemQuantity"`;

              let params = [
                data.items[i].id,
                data.items[i].selectedQuantity,
                data.id,
                data.items[i].subTotal,
              ];
              pool.query(sql, params, (err, res) => {
                //pool.end();
                if (err) resolve(err);
                resolve(res);
              });
            });
            finalResult.push(result1.command, result1.rows);

            try {
              //Update the item quantity in item table according to how much of an item is delivered
              const pool = await connects();
              const result2 = await new Promise((resolve) => {
                const sql = `UPDATE "items" SET "itemQuantity" = "itemQuantity" - $1 WHERE itemid = $2 RETURNING "itemName", "itemPrice", "itemQuantity"`;

                let params = [result1.rows[0].itemQuantity, data.items[i].id];
                pool.query(sql, params, (err, res) => {
                  //pool.end();
                  if (err) resolve(err);
                  resolve(res);
                });
              });
              finalResult.push(result2.command, result2.rows);
              try {
                const result3 = await new Promise((resolve) => {
                  const sql = `UPDATE "transactionItems" SET "itemQuantity" = $2, "subTotal" = $4 WHERE itemid = $1 AND "transactionid" = $3 RETURNING itemid, "itemQuantity"`;

                  let params = [
                    data.items[i].id,
                    data.items[i].selectedQuantity,
                    data.id,
                    data.items[i].subTotal,
                  ];

                  pool.query(sql, params, (err, res) => {
                    //pool.end();
                    if (err) resolve(err);
                    resolve(res);
                  });
                });
                finalResult.push(result3.command, result3.rows);
              } catch (e) {
                console.log("Error: ", e);
              }
            } catch (e) {
              console.log("Error: ", e);
            }
          }
          return { finalResult };
        } catch (e) {
          console.log("Error: ", e);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = { deliveryTransactionsQuery };
