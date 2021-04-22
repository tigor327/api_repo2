const { connects } = require("../index");

const { clearDBQuery } = require("./query");

const clearDB = clearDBQuery({ connects });

module.exports = clearDB;
