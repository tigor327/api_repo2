const express = require("express");
const salesRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const salesRoutes = require("./route");

const salesRoute = salesRoutes({ salesRouter, makeExpressCallback });

const services = Object.freeze({
  salesRoute,
});

module.exports = services;
module.exports = { salesRoute };
module.exports = salesRouter;
