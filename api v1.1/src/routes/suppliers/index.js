const express = require("express");
const supplierRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const supplierRoutes = require("./route");

const supplierRoute = supplierRoutes({ supplierRouter, makeExpressCallback });

const services = Object.freeze({
  supplierRoute,
});

module.exports = services;
module.exports = { supplierRoute };
module.exports = supplierRouter;
