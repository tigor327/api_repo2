const {
  listDeliveryTransactionUseCase,
  registerDeliveryTransactionUseCase,
  removeDeliveryTransactionUseCase,
  updateDeliveryTransactionUseCase,
  listDeliveryByIdTransactionUseCase,
} = require("../../use-cases/deliveryTransaction/index");

const getAllDeliveryTransactions = require("./get-all-deliveryTransactions");
const getAllDeliveryByIdTransactions = require("./get-all-deliveryByIdTransactions");
const registerDeliveryTransactions = require("./register-deliveryTransaction");
const removeDeliveryTransactionById = require("./remove-deliveryTransaction");
const updateDeliveryTransactionById = require("./update-deliveryTransaction");
//console.log("passed through index deliveryTransaction controller");
const getAllDeliveryTransactionsController = getAllDeliveryTransactions({
  listDeliveryTransactionUseCase,
});
const getAllDeliveryByIdTransactionsController = getAllDeliveryByIdTransactions(
  {
    listDeliveryByIdTransactionUseCase,
  }
);
const registerDeliveryTransactionController = registerDeliveryTransactions({
  registerDeliveryTransactionUseCase,
});
const removeDeliveryTransactionController = removeDeliveryTransactionById({
  removeDeliveryTransactionUseCase,
});
const updateDeliveryTransactionController = updateDeliveryTransactionById({
  updateDeliveryTransactionUseCase,
});

const services = Object.freeze({
  getAllDeliveryTransactionsController,
  registerDeliveryTransactionController,
  removeDeliveryTransactionController,
  updateDeliveryTransactionController,
  getAllDeliveryByIdTransactionsController,
});

module.exports = services;
module.exports = {
  getAllDeliveryTransactionsController,
  registerDeliveryTransactionController,
  removeDeliveryTransactionController,
  updateDeliveryTransactionController,
  getAllDeliveryByIdTransactionsController,
};
