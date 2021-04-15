const express = require("express");
const loginRouter = express.Router();
const makeExpressCallback = require("../../controllers/express-callback/index");

const loginRoutes = require("./route");

const loginRoute = loginRoutes({ loginRouter, makeExpressCallback });

const services = Object.freeze({
  loginRoute,
});

module.exports = services;
module.exports = { loginRoute };
module.exports = loginRouter;
