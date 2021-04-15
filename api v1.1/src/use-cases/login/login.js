var jwt = require("jsonwebtoken");
const login = ({ loginDb, makeLogin_ENTITY }) => {
  return async function add(info) {
    const config = require("../../data-access/config/config");
    let data = await makeLogin_ENTITY({ info });
    var token = "";
    data = {
      userName: data.userName(),
      password: data.password(),
    };

    const res = await loginDb.getLogin({ data });
    console.log("resultttttsststststs");
    if (res.rows.length == 1) {
      token = jwt.sign(res.rows[0].userName, config.development.JWTSecret);
    }

    let prompt =
      res.rows.length == 1 ? "Login succesfully!" : "Failed to login.";
    if (res.rows.length == 1) {
      return {
        message: prompt,
        result: res,
        token: token,
      };
    } else {
      return {
        message: prompt,
        result: res,
      };
    }
  };
};

module.exports = login;
