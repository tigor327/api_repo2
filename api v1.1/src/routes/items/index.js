const express = require("express");
const itemRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const itemRoutes = require("./route");

const itemRoute = itemRoutes({ itemRouter, makeExpressCallback });

const services = Object.freeze({
  itemRoute,
});

module.exports = services;
module.exports = { itemRoute };
module.exports = itemRouter;
