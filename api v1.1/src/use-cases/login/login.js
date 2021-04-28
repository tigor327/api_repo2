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
    console.log("=====================================: res: ", res.rows[0]);
    if (res.rows.length == 1) {
      let rows = res.rows[0];
      let user = { username: rows.userName };
      token = jwt.sign(user, config.development.JWTSecret);
      data.token = token;
      var result = await loginDb.addToken({ data });
    }

    let prompt;
    if (res.rows.length == 1) {
      prompt = "Login succesfully!";
      return {
        message: prompt,
        result: res.rows,
        token: result.rows[0].token,
      };
    } else {
      prompt = "Failed to login. incorect username or password";
      return {
        message: prompt,
      };
    }
  };
};

module.exports = login;
