const {
    getUserUseCase,
    // registerUserUseCase
} = require('../../use-cases/login/index')

const userLogin = require('./user-login')
// const userRegister = require('./user-register')

const getUserController = userLogin({getUserUseCase})
// const registerUserController = userRegister({registerUserUseCase})

const services = Object.freeze({
    getUserController,
    // registerUserController
})

module.exports = services
module.exports = {
    getUserController,
    // registerUserController
}