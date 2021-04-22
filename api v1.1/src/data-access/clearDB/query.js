const clearDBQuery = ({ connects }) => {
  return Object.freeze({
    clearDB,
  });

  async function clearDB({}) {
    if (process.env.NODE_ENV == "test") {
      try {
        const pool = await connects();

        const result = await new Promise((resolve) => {
          let sql = `TRUNCATE TABLE "transactionItems", "transactions", "items", "users", "userTypes" RESTART IDENTITY;
          INSERT INTO "userTypes"("userTypeId", "userTypeName") VALUES (1, 'Admin'), (2, 'Employee'), (3, 'Customer'), (4, 'Supplier');
          INSERT INTO users("userName", "userContact", "userAddress", "userStatus", "userTypeId", "password") 
          VALUES 
          ('Unregistered Customer', 'No Contact', 'No Address', 'Active', 3, null),
          ('admin', 'No Contact', 'No Address', 'Active', 1, 'admin'),
          ('employee', 'No Contact', 'No Address', 'Active', 2, 'employee'),
          ('Unregistered Supplier', 'No Contact', 'No Address', 'Active', 4, null);
          
          INSERT INTO items ("itemName", "itemBarcode", "itemDescription", "itemPrice", "itemQuantity", "itemStatus", userid) VALUES ('item1', 'abcd-1234', 'item1 description', 10, 10, 'Active', 4), 
          ('item2', '1234-abcd', 'item2 description', 10, 10, 'Active', 4);
          
          INSERT INTO transactions (userid, "transactionDate", "grandTotal", "deliveryDate", "transactionType") 
          VALUES 
          (4, '04-21-2021', 3000, '04-20-2021', 'delivery'), 
          (4, '04-11-2021', 1500, '04-10-2021', 'delivery'),
          (1, '04-21-2021', 400, null, 'Sales'),
          (1, '04-12-2021', 700, null, 'Sales');
          
          INSERT INTO "transactionItems" (itemid, "itemQuantity", transactionid, "subTotal") 
          VALUES
          (1, 100, 1, 1000),
          (2, 100, 1, 2000),
          (1, 50, 2, 500),
          (2, 50, 2, 1000),
          (1, 10, 3, 100),
          (2, 15, 3, 300),
          (1, 20, 4, 200),
          (2, 25, 4, 500);`;
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
    } else {
      throw new Error(
        "YOU'RE NOT RUNNING IN TEST MODE, DON'T CLEAR THE ACTUAL DATABASE!!!"
      );
    }
  }
};
module.exports = { clearDBQuery };
