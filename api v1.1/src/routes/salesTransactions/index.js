const express = require("express");
const salesTransactionRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const salesTransactionRoutes = require("./route");
const tokenAuth = require("../../middleware/tokenValidation/tokenAuthentication");

const salesTransactionRoute = salesTransactionRoutes({
  tokenAuth,
  salesTransactionRouter,
  makeExpressCallback,
});

const services = Object.freeze({
  salesTransactionRoute,
});

module.exports = services;
module.exports = { salesTransactionRoute };
module.exports = salesTransactionRouter;
