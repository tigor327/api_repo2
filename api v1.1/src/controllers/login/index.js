const {
  loginUseCase,
  // registerUserUseCase
} = require("../../use-cases/login/index");

const userLogin = require("./user-login");
// const userRegister = require('./user-register')

const loginController = userLogin({ loginUseCase });
// const registerUserController = userRegister({registerUserUseCase})

const services = Object.freeze({
  loginController,
  // registerUserController
});

module.exports = services;
module.exports = {
  loginController,
  // registerUserController
};
