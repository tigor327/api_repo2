var jwt = require("jsonwebtoken");
const {
  clearDataBaseController,
} = require("../../controllers/clearDataBase/index");

const clearDataBaseRoutes = ({ clearDataBaseRouter, makeExpressCallback }) => {
  clearDataBaseRouter.get(
    "/",

    makeExpressCallback(clearDataBaseController)
  );

  return clearDataBaseRouter;
};

module.exports = clearDataBaseRoutes;
