const loginQuery = ({ connects, model }) => {
  return Object.freeze({
    getLogin,
    addToken,
    getToken,
  });
  async function getToken({ data }) {
    try {
      const pool = await connects();
      console.log("data inside query.: ", data);
      const result = await new Promise((resolve) => {
        let sql = `SELECT "userName" FROM "users" WHERE token = $1`;
        let params = [data];
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
  async function getLogin({ data }) {
    console.log(data);
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `SELECT userid, "userName", "userContact", "userAddress", "userStatus", "userTypeId", token FROM users WHERE "userName" = $1 AND password = $2`;
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
  async function addToken({ data }) {
    try {
      const pool = await connects();

      const result = await new Promise((resolve) => {
        let sql = `UPDATE users set token = $3  WHERE "userName" = $1 AND password = $2 returning token`;
        let params = [data.userName, data.password, data.token];
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
