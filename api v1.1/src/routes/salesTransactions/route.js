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

function auth(req, res, next) {
  try {
    console.log("try Initiated");
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      throw new Error("Forbidden access");
    }
  } catch (e) {
    res.sendStatus(403);
    console.log("Error: ", e);
  }
}
