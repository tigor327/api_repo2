const {
  listSalesTransactionUseCase,
  listSalesByIdTransactionUseCase,
  registerSalesTransactionUseCase,
  removeSalesTransactionUseCase,
  updateSalesTransactionUseCase,
} = require("../../use-cases/salesTransaction/index");

const getAllSalesTransactions = require("./get-all-salesTransactions");
const getAllSalesByIdTransactions = require("./get-all-salesByIdTransactions");

const registerSalesTransactions = require("./register-salesTransaction");
const removeSalesTransactionById = require("./remove-salesTransaction");
const updateSalesTransaction = require("./update-salesTransaction");
//console.log("passed through index salesTransaction controller");
const getAllSalesTransactionsController = getAllSalesTransactions({
  listSalesTransactionUseCase,
});
const getAllSalesByIdTransactionsController = getAllSalesByIdTransactions({
  listSalesByIdTransactionUseCase,
});
const registerSalesTransactionController = registerSalesTransactions({
  registerSalesTransactionUseCase,
});
const removeSalesTransactionController = removeSalesTransactionById({
  removeSalesTransactionUseCase,
});
const updateSalesTransactionController = updateSalesTransaction({
  updateSalesTransactionUseCase,
});

const services = Object.freeze({
  getAllSalesTransactionsController,
  getAllSalesByIdTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
  updateSalesTransactionController,
});

module.exports = services;
module.exports = {
  getAllSalesTransactionsController,
  getAllSalesByIdTransactionsController,
  registerSalesTransactionController,
  removeSalesTransactionController,
  updateSalesTransactionController,
};
