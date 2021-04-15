const {
  getSalesController,
  addSalesController,
} = require("../../controllers/sales/index");

const salesRoutes = ({ salesRouter, makeExpressCallback }) => {
  salesRouter.get("/", tokenAuth, makeExpressCallback(getSalesController));
  salesRouter.post("/", tokenAuth, makeExpressCallback(addSalesController));

  return salesRouter;
};

module.exports = salesRoutes;
