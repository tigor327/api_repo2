const { connects } = require("../index");
const model = require("../sequelize/models/login");

const { loginQuery } = require("./query");

const loginDb = loginQuery({ connects, model });

module.exports = loginDb;
