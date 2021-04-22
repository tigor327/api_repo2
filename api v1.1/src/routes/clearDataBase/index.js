const express = require("express");
const clearDataBaseRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const clearDataBaseRoutes = require("./route");

const clearDataBaseRoute = clearDataBaseRoutes({
  clearDataBaseRouter,
  makeExpressCallback,
});

const services = Object.freeze({
  clearDataBaseRoute,
});

module.exports = services;
module.exports = { clearDataBaseRoute };
module.exports = clearDataBaseRouter;
