const {
  makeSupplier_ENTITY,
  updateSupplier_ENTITY,
} = require("../../entities/supplier/index");

const suppliersDb = require("../../data-access/suppliers/index");

const listSupplier = require("./list-supplier");
const registerSupplier = require("./register-supplier");
const removeSupplier = require("./remove-supplier");
const updateSupplier = require("./update-supplier.js");

const listSupplierUseCase = listSupplier({ suppliersDb });
const registerSupplierUseCase = registerSupplier({
  suppliersDb,
  makeSupplier_ENTITY,
});
const removeSupplierUseCase = removeSupplier({ suppliersDb });
const updateSupplierUseCase = updateSupplier({
  suppliersDb,
  updateSupplier_ENTITY,
});

const services = Object.freeze({
  listSupplierUseCase,
  registerSupplierUseCase,
  removeSupplierUseCase,
  updateSupplierUseCase,
});

module.exports = services;
module.exports = {
  listSupplierUseCase,
  registerSupplierUseCase,
  removeSupplierUseCase,
  updateSupplierUseCase,
};
