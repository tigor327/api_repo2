const {
  getSalesController,
  addSalesController,
} = require("../../controllers/sales/index");

const salesRoutes = ({ salesRouter, makeExpressCallback }) => {
  salesRouter.get("/", makeExpressCallback(getSalesController));
  salesRouter.post("/", makeExpressCallback(addSalesController));

  return salesRouter;
};

module.exports = salesRoutes;
