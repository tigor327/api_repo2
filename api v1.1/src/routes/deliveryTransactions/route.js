const {
  getAllDeliveryTransactionsController,
  registerDeliveryTransactionController,
  removeDeliveryTransactionController,
  updateDeliveryTransactionController,
  getAllDeliveryByIdTransactionsController,
} = require("../../controllers/deliveryTransaction/index");

const deliveryTransactionRoutes = ({
  deliveryTransactionRouter,
  makeExpressCallback,
}) => {
  deliveryTransactionRouter.get(
    "/",
    makeExpressCallback(getAllDeliveryTransactionsController)
  );
  deliveryTransactionRouter.get(
    "/:id",
    makeExpressCallback(getAllDeliveryByIdTransactionsController)
  );
  deliveryTransactionRouter.post(
    "/",
    makeExpressCallback(registerDeliveryTransactionController)
  );
  deliveryTransactionRouter.delete(
    "/:id",
    makeExpressCallback(removeDeliveryTransactionController)
  );
  deliveryTransactionRouter.patch(
    "/:id",
    makeExpressCallback(updateDeliveryTransactionController)
  );

  return deliveryTransactionRouter;
};

module.exports = deliveryTransactionRoutes;
