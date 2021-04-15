const { connects } = require("../index");
const model = require("../sequelize/models/supplier");

const { supplierQuery } = require("./query");

const suppliersDb = supplierQuery({ connects, model });

module.exports = suppliersDb;
