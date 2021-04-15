const { connects } = require("../index");
const model = require("../sequelize/models/customer");

const {customerQuery} = require("./query");

const customersDb = customerQuery({ connects, model });

module.exports = customersDb;