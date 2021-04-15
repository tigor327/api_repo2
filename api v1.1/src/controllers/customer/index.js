const {
  listCustomerUseCase,
  registerCustomerUseCase,
  removeCustomerUseCase,
  updateCustomerUseCase,
} = require("../../use-cases/customer/index");

const getAllCustomers = require("./get-all-customers");
const registerCustomers = require("./register-customer");
const removeCustomerById = require("./remove-customer");
const updateCustomerById = require("./update-customer.js");

const getAllCustomerController = getAllCustomers({ listCustomerUseCase });
const registerCustomerController = registerCustomers({
  registerCustomerUseCase,
});
const removeCustomerController = removeCustomerById({ removeCustomerUseCase });
const updateCustomerController = updateCustomerById({ updateCustomerUseCase });

const services = Object.freeze({
  getAllCustomerController,
  registerCustomerController,
  removeCustomerController,
  updateCustomerController,
});

module.exports = services;
module.exports = {
  getAllCustomerController,
  registerCustomerController,
  removeCustomerController,
  updateCustomerController,
};
