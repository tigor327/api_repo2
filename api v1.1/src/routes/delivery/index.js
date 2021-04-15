const express = require('express')
const deliveryRouter = express.Router()
const makeExpressCallback = require('../../controllers/express-callback/index')

const deliveryRoutes = require('./route')

const deliveryRoute = deliveryRoutes({deliveryRouter, makeExpressCallback})

const services = Object.freeze({
    deliveryRoute
})

module.exports = services
module.exports = { deliveryRoute }
module.exports = deliveryRouter