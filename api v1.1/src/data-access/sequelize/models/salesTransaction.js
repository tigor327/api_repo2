const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

//model based on the default database table
const SalesTransactionModel = db.define(
  "transactions",
  {
    transactionid: { type: DataTypes.INTEGER, primaryKey: true },
    userid: { type: DataTypes.INTEGER },
    transactionDate: { type: DataTypes.DATE },
    grandTotal: { type: DataTypes.INTEGER },
    deliveryDate: { type: DataTypes.DATE },
    transactionType: { type: DataTypes.STRING },
  },
  { freezeTableName: true, timestamps: false, tableName: "transactions" }
);

module.exports = {
  SalesTransactionModel,
};
