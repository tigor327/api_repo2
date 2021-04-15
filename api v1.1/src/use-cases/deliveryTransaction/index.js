const {
  makeDeliveryTransaction_ENTITY,
  updateDeliveryTransaction_ENTITY,
} = require("../../entities/deliveryTransaction/index");

const deliveryTransactionsDb = require("../../data-access/deliveryTransactions/index");

const listDeliveryTransactions = require("./list-deliveryTransaction");
const listDeliveryByIdTransactions = require("./list-deliveryByIdTransaction");
const registerDeliveryTransaction = require("./register-deliveryTransaction");
const removeDeliveryTransaction = require("./remove-deliveryTransaction");
const updateDeliveryTransaction = require("./update-deliveryTransaction");

const listDeliveryTransactionUseCase = listDeliveryTransactions({
  deliveryTransactionsDb,
});
const listDeliveryByIdTransactionUseCase = listDeliveryByIdTransactions({
  deliveryTransactionsDb,
});
const registerDeliveryTransactionUseCase = registerDeliveryTransaction({
  deliveryTransactionsDb,
  makeDeliveryTransaction_ENTITY,
});
const removeDeliveryTransactionUseCase = removeDeliveryTransaction({
  deliveryTransactionsDb,
});
const updateDeliveryTransactionUseCase = updateDeliveryTransaction({
  deliveryTransactionsDb,
  updateDeliveryTransaction_ENTITY,
});

const services = Object.freeze({
  listDeliveryTransactionUseCase,
  listDeliveryByIdTransactionUseCase,
  registerDeliveryTransactionUseCase,
  removeDeliveryTransactionUseCase,
  updateDeliveryTransactionUseCase,
});

module.exports = services;
module.exports = {
  listDeliveryTransactionUseCase,
  listDeliveryByIdTransactionUseCase,
  registerDeliveryTransactionUseCase,
  removeDeliveryTransactionUseCase,
  updateDeliveryTransactionUseCase,
};
