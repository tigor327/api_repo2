const { makeLogin_ENTITY } = require("../../entities/login/index");

const loginDb = require("../../data-access/login/index");

const login = require("./login");

const loginUseCase = login({
  loginDb,
  makeLogin_ENTITY,
});

const services = Object.freeze({
  loginUseCase,
});

module.exports = services;
module.exports = {
  loginUseCase,
};
