const { connects } = require("../index");
const model = require("../sequelize/models/salesTransaction");

const { salesTransactionsQuery } = require("./query");

const salesTransactionsDb = salesTransactionsQuery({ connects, model });

module.exports = salesTransactionsDb;
