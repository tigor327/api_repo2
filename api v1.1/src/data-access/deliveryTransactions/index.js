const { connects } = require("../index");
const model = require("../sequelize/models/deliveryTransaction");

const { deliveryTransactionsQuery } = require("./query");

const deliveryTransactionsDb = deliveryTransactionsQuery({ connects, model });

module.exports = deliveryTransactionsDb;
