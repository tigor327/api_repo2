const loginQuery = ({ connects, model }) => {
  return Object.freeze({
    getLogin,
  });

  async function getLogin({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT userid, "userName", "userContact", "userAddress", "userStatus", "userTypeId" FROM users WHERE "userName" = $1 AND password = $2`;
        let params = [data.userName, data.password];
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

module.exports = { loginQuery };
