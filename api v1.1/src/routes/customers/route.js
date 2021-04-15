var jwt = require("jsonwebtoken");
const {
  getAllCustomerController,
  registerCustomerController,
  removeCustomerController,
  updateCustomerController,
} = require("../../controllers/customer/index");

const customerRoutes = ({ customerRouter, makeExpressCallback }) => {
  customerRouter.get(
    "/",

    makeExpressCallback(getAllCustomerController)
  );
  customerRouter.post(
    "/",

    makeExpressCallback(registerCustomerController)
  );
  customerRouter.delete(
    "/:id",

    makeExpressCallback(removeCustomerController)
  );
  customerRouter.patch(
    "/:id",

    makeExpressCallback(updateCustomerController)
  );
  return customerRouter;
};

module.exports = customerRoutes;
