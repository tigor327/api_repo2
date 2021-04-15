const express = require('express')
const customerRouter = express.Router()
const makeExpressCallback = require('../../controllers/express-callback/index')

const customerRoutes = require('./route')

const customerRoute = customerRoutes({customerRouter, makeExpressCallback})

const services = Object.freeze({
    customerRoute
})

module.exports = services
module.exports = { customerRoute }
module.exports = customerRouter