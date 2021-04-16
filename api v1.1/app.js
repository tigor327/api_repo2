require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const customerRoute = require("./src/routes/customers/index");
const supplierRoute = require("./src/routes/suppliers/index");
const itemRoute = require("./src/routes/items/index");
const salesTransactionRoute = require("./src/routes/salesTransactions/index");
const deliveryTransactionRoute = require("./src/routes/deliveryTransactions/index");
const loginRoute = require("./src/routes/login/index");
const validateToken = require("./src/middleware/tokenValidation/tokenAuthentication");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
app.use("/customers/list", validateToken, customerRoute);
app.use("/suppliers/list", supplierRoute);
app.use("/items/list", itemRoute);
app.use("/transaction/sales", salesTransactionRoute);
app.use("/transaction/delivery", deliveryTransactionRoute);
app.use("/login", loginRoute);

app.use(async (req, res) => {
  res.status(404).send("Route unavailable.");
});

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
