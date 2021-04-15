const {
  makeSalesTransaction_ENTITY,
  updateSalesTransaction_ENTITY,
} = require("../../entities/salesTransaction/index");

const salesTransactionsDb = require("../../data-access/salesTransactions/index");

const listSalesTransactions = require("./list-salesTransaction");
const listSalesByIdTransactions = require("./list-salesByIdTransaction");
const registerSalesTransaction = require("./register-salesTransaction");
const removeSalesTransaction = require("./remove-salesTransaction");
const updateSalesTransaction = require("./update-salesTransaction");

const listSalesTransactionUseCase = listSalesTransactions({
  salesTransactionsDb,
});
const listSalesByIdTransactionUseCase = listSalesByIdTransactions({
  salesTransactionsDb,
});
const registerSalesTransactionUseCase = registerSalesTransaction({
  salesTransactionsDb,
  makeSalesTransaction_ENTITY,
});
const removeSalesTransactionUseCase = removeSalesTransaction({
  salesTransactionsDb,
});
const updateSalesTransactionUseCase = updateSalesTransaction({
  salesTransactionsDb,
  updateSalesTransaction_ENTITY,
});

const services = Object.freeze({
  listSalesTransactionUseCase,
  listSalesByIdTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
});

module.exports = services;
module.exports = {
  listSalesTransactionUseCase,
  listSalesByIdTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
};
