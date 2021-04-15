const express = require("express");
const deliveryTransactionRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const deliveryTransactionRoutes = require("./route");

const deliveryTransactionRoute = deliveryTransactionRoutes({
  deliveryTransactionRouter,
  makeExpressCallback,
});

const services = Object.freeze({
  deliveryTransactionRoute,
});

module.exports = services;
module.exports = { deliveryTransactionRoute };
module.exports = deliveryTransactionRouter;
