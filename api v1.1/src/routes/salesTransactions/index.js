const express = require("express");
const salesTransactionRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const salesTransactionRoutes = require("./route");

const salesTransactionRoute = salesTransactionRoutes({
  salesTransactionRouter,
  makeExpressCallback,
});

const services = Object.freeze({
  salesTransactionRoute,
});

module.exports = services;
module.exports = { salesTransactionRoute };
module.exports = salesTransactionRouter;
