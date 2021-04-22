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
    console.log("resultttttsststststs: ", res);
    if (res.rows.length == 1) {
      token = jwt.sign(res.rows[0].userName, config.development.JWTSecret);
    }

    let prompt;
    if (res.rows.length == 1) {
      promt = "Login succesfully!";
    } else {
      throw new Error("Failed to login. incorect username or password");
    }
    if (res.rows.length == 1) {
      return {
        message: prompt,
        result: res,
        token: token,
      };
    } else {
      return {
        message: prompt,
      };
    }
  };
};

module.exports = login;
