const clearDB = require("../../data-access/clearDB/index");

const clearDataBase = require("./clearDataBase");

const clearDataBaseUseCase = clearDataBase({ clearDB });

const services = Object.freeze({
  clearDataBaseUseCase,
});

module.exports = services;
module.exports = {
  clearDataBaseUseCase,
};
