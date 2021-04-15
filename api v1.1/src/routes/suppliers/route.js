const {
  getAllSupplierController,
  registerSupplierController,
  removeSupplierController,
  updateSupplierController,
} = require("../../controllers/supplier/index");

const supplierRoutes = ({ supplierRouter, makeExpressCallback }) => {
  supplierRouter.get("/", makeExpressCallback(getAllSupplierController));
  supplierRouter.post("/", makeExpressCallback(registerSupplierController));
  supplierRouter.delete("/:id", makeExpressCallback(removeSupplierController));
  supplierRouter.patch("/:id", makeExpressCallback(updateSupplierController));
  return supplierRouter;
};

module.exports = supplierRoutes;
