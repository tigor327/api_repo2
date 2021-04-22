require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const customerRoute = require("./src/routes/customers/index");
const supplierRoute = require("./src/routes/suppliers/index");
const itemRoute = require("./src/routes/items/index");
const salesTransactionRoute = require("./src/routes/salesTransactions/index");
const deliveryTransactionRoute = require("./src/routes/deliveryTransactions/index");
const clearDataBaseRoute = require("./src/routes/clearDataBase/index");

const loginRoute = require("./src/routes/login/index");
const validateToken = require("./src/middleware/tokenValidation/tokenAuthentication");

//const port = process.env.PORT || 5000;
var port;

process.env.NODE_ENV == "development"
  ? (port = process.env.PORT)
  : (port = process.env.TEST_PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = app.listen(port);
app.use("/customers/list", validateToken, customerRoute);
app.use("/suppliers/list", validateToken, supplierRoute);
app.use("/items/list", validateToken, itemRoute);
app.use("/transaction/sales", validateToken, salesTransactionRoute);
app.use("/transaction/delivery", validateToken, deliveryTransactionRoute);
app.use("/login", loginRoute);
app.use("/clear", clearDataBaseRoute);

app.use(async (req, res) => {
  res.status(404).send("Route unavailable.");
});
module.exports = app;
module.exports = server;
// app.use(
//   "/user/:id",
//   function(req, res, next) {
//     console.log("Request URL:", req.originalUrl);
//     next();
//   },
//   function(req, res, next) {
//     console.log("Request Type:", req.method);
//     next();
//   }
// );
