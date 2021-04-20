const salesTransactionsQuery = ({ connects, model }) => {
  return Object.freeze({
    addSalesTransaction,
    removeSalesTransaction,
    getAllSalesTransactions,
    getAllSalesByIdTransactions,
    updateSalesTransaction,
    checkDupe,
  });

  async function getAllSalesTransactions({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM "transactions" a INNER JOIN users b ON a.userid = b.userid WHERE "transactionType" = 'Sales' ORDER BY transactionid`;
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

  async function getAllSalesByIdTransactions({ id }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT a.*, b."itemName", b."itemBarcode", b."itemDescription", b."itemPrice", c."userName" FROM "transactionItems" a INNER JOIN "items" b ON a."itemid" = b."itemid" INNER JOIN "users" c ON b.userid = c.userid WHERE a."transactionid" = $1 `;
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

  async function addSalesTransaction({ data }) {
    var finalResult = [];
    try {
      try {
        const pool = await connects();
        //add to salesTransaction Table

        const resultId = await new Promise((resolve) => {
          const sql = `SELECT userid FROM users WHERE "userName" = $1`;
          let params = [data.custName];
          pool.query(sql, params, (err, res) => {
            if (err) resolve(err);
            resolve(res);
          });
        });

        //add to salesTransaction Table
        const result = await new Promise((resolve) => {
          const sql = `INSERT INTO "transactions" (userid, "transactionDate", "grandTotal", "transactionType") VALUES ($1, $2, $3, 'Sales') RETURNING "transactionid"`;
          let params = [
            resultId.rows[0].userid,
            data.dateAndTime,
            data.transactionTotal,
          ];

          pool.query(sql, params, (err, res) => {
            pool.end();
            if (err) resolve(err);
            resolve(res);
          });
        });

        finalResult.push(result.rows);

        //add itemSales data
        try {
          const pool = await connects();
          for (var i = 0; i < data.items.length; i++) {
            const result1 = await new Promise((resolve) => {
              const sql = `INSERT INTO "transactionItems" ( itemid, "itemQuantity", transactionid, "subTotal") VALUES ($1, $2, $3, $4) RETURNING itemid, "itemQuantity", "subTotal"`;
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

            finalResult.push(result1.command, result1.rows);

            try {
              //Update item Quantity
              const pool = await connects();
              const result2 = await new Promise((resolve) => {
                const sql = `UPDATE "items" SET "itemQuantity" = "itemQuantity" - $1 WHERE itemid = $2 RETURNING "itemName", "itemPrice", "itemQuantity"`;

                let params = [data.items[i].selectedQuantity, data.items[i].id];
                pool.query(sql, params, (err, res) => {
                  //pool.end();
                  if (err) resolve(err);
                  resolve(res);
                });
              });

              finalResult.push(result2.command, result2.rows);
            } catch (e) {
              console.log("Error: ", e);
            }
          }
          //return { result };
        } catch (e) {
          console.log("Error: ", e);
        }
      } catch (e) {
        console.log("Error: ", e);
      }
      return { finalResult };
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function removeSalesTransaction({ id }) {
    var finalResult = [];
    try {
      try {
        //Update item Quantity
        const pool = await connects();

        const data = await getAllSalesByIdTransactions({ id });
        for (var i = 0; i < data.rowCount; i++) {
          const result2 = await new Promise((resolve) => {
            const sql = `UPDATE "items" SET "itemQuantity" = "itemQuantity" + $1 WHERE itemid = $2 RETURNING "itemName", "itemPrice", "itemQuantity"`;

            let params = [data.rows[i].itemQuantity, data.rows[i].itemid];
            pool.query(sql, params, (err, res) => {
              //pool.end();
              if (err) resolve(err);
              resolve(res);
            });
          });

          finalResult.push(result2.command);
        }

        //return { result };
      } catch (e) {
        console.log("Error: ", e);
      }
      // use sequelize on inserting
      const SalesTransaction = model.SalesTransactionModel;
      const res = await SalesTransaction.destroy({
        where: {
          transactionid: id,
        },
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function checkDupe({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        const sql = `SELECT * FROM salesTransactions WHERE "name" = $1`;
        let params = [data.name];

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
  async function updateSalesTransaction({ data }) {
    var finalResult = [];
    try {
      let id = await getId({ data });

      const pool = await connects();
      const result = await new Promise((resolve) => {
        let sql = `UPDATE "transactions" SET "userid" = $2, "transactionDate" = $3, "grandTotal" = $4  WHERE "transactionid" = $1`;
        let params = [data.id, id, data.dateAndTime, data.transactionTotal];

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

  async function getId({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT userid FROM "users" WHERE "userName" = $1`;
        let params = [data.custname];
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
};

module.exports = { salesTransactionsQuery };
