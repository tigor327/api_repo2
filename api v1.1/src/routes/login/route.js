const { loginController } = require("../../controllers/login/index");

const loginRoutes = ({ loginRouter, makeExpressCallback }) => {
  loginRouter.post("/", makeExpressCallback(loginController));

  return loginRouter;
};

module.exports = loginRoutes;
