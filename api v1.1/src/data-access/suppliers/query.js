const supplierQuery = ({ connects, model }) => {
  return Object.freeze({
    addSupplier,
    removeSupplier,
    getAllSuppliers,
    updateSupplier,
    checkDupe,
  });

  async function getSupplierById({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM users WHERE "userTypeId" = 4 AND userid = $1 ORDER BY userid`;
        let params = [data.id];
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

  async function getAllSuppliers({}) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT * FROM users WHERE "userTypeId" = 4 ORDER BY userid`;
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

  async function addSupplier({ data }) {
    try {
      const Supplier = model.SupplierModel;
      const result = await Supplier.create({
        userName: data.supName,
        userContact: data.supContact,
        userAddress: data.supAddress,
        userStatus: "Active",
        userTypeId: 4,
      });
      return result.dataValues;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function updateSupplier({ data }) {
    try {
      let result1 = await getSupplierById({ data });

      if (result1.rowCount > 0) {
        try {
          const Supplier = model.SupplierModel;
          const result = await Supplier.update(
            {
              userName: data.supName,
              userContact: data.supContact,
              userAddress: data.supAddress,
              userStatus: data.supStatus,
            },
            {
              where: { userid: data.id },
            }
          );
          result1 = await getSupplierById({ data });
          return result1.rows;
        } catch (e) {
          console.log("Error: ", e);
        }
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function removeSupplier({ id }) {
    try {
      // use sequelize on inserting
      const Supplier = model.SupplierModel;
      const res = await Supplier.destroy({
        where: {
          userid: id,
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
        const sql = `SELECT * FROM users WHERE "userName" = $1`;
        let params = [data.supName];

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
};

module.exports = { supplierQuery };
