const {
  getAllSalesTransactionsController,
  getAllSalesByIdTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
  updateSalesTransactionController,
} = require("../../controllers/salesTransaction/index");

const salesTransactionRoutes = ({
  salesTransactionRouter,
  makeExpressCallback,
}) => {
  salesTransactionRouter.get(
    "/",
    makeExpressCallback(getAllSalesTransactionsController)
  );
  salesTransactionRouter.get(
    "/:id",
    makeExpressCallback(getAllSalesByIdTransactionsController)
  );
  salesTransactionRouter.post(
    "/",
    makeExpressCallback(registerSalesTransactionController)
  );
  salesTransactionRouter.delete(
    "/:id",
    makeExpressCallback(removeSalesTransactionController)
  );
  salesTransactionRouter.patch(
    "/:id",
    makeExpressCallback(updateSalesTransactionController)
  );

  return salesTransactionRouter;
};

module.exports = salesTransactionRoutes;
