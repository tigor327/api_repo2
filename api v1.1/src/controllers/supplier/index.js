const {
  listSupplierUseCase,
  registerSupplierUseCase,
  removeSupplierUseCase,
  updateSupplierUseCase,
} = require("../../use-cases/supplier/index");

const getAllSuppliers = require("./get-all-suppliers");
const registerSuppliers = require("./register-supplier");
const removeSupplierById = require("./remove-supplier");
const updateSupplierById = require("./update-supplier.js");

const getAllSupplierController = getAllSuppliers({ listSupplierUseCase });
const registerSupplierController = registerSuppliers({
  registerSupplierUseCase,
});
const removeSupplierController = removeSupplierById({ removeSupplierUseCase });
const updateSupplierController = updateSupplierById({ updateSupplierUseCase });

const services = Object.freeze({
  getAllSupplierController,
  registerSupplierController,
  removeSupplierController,
  updateSupplierController,
});

module.exports = services;
module.exports = {
  getAllSupplierController,
  registerSupplierController,
  removeSupplierController,
  updateSupplierController,
};
