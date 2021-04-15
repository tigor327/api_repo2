const {
  makeCustomer_ENTITY,
  updateCustomer_ENTITY,
} = require("../../entities/customer/index");

const customersDb = require("../../data-access/customers/index");

const listCustomer = require("./list-customers");
const registerCustomer = require("./register-customer");
const removeCustomer = require("./remove-customer");
const updateCustomer = require("./update-customer.js");

const listCustomerUseCase = listCustomer({ customersDb });
const registerCustomerUseCase = registerCustomer({
  customersDb,
  makeCustomer_ENTITY,
});
const removeCustomerUseCase = removeCustomer({ customersDb });
const updateCustomerUseCase = updateCustomer({
  customersDb,
  updateCustomer_ENTITY,
});

const services = Object.freeze({
  listCustomerUseCase,
  registerCustomerUseCase,
  removeCustomerUseCase,
  updateCustomerUseCase,
});

module.exports = services;
module.exports = {
  listCustomerUseCase,
  registerCustomerUseCase,
  removeCustomerUseCase,
  updateCustomerUseCase,
};
