const { connects } = require("../index");
const model = require("../sequelize/models/item");

const { itemsQuery } = require("./query");

const itemsDb = itemsQuery({ connects, model });

module.exports = itemsDb;
