const { clearDataBaseUseCase } = require("../../use-cases/clearDataBase/index");

const clearDataBase = require("./clearDataBase");

const clearDataBaseController = clearDataBase({ clearDataBaseUseCase });

const services = Object.freeze({
  clearDataBaseController,
});

module.exports = services;
module.exports = {
  clearDataBaseController,
};
