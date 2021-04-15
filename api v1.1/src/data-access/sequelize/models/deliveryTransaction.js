const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

//model based on the default database table
const DeliveryTransactionModel = db.define(
  "deliveryTransaction",
  {
    deliveryTransactionsId: { type: DataTypes.INTEGER, primaryKey: true },
    supid: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE },
    grandTotal: { type: DataTypes.INTEGER },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "transactions",
  }
);

module.exports = {
  DeliveryTransactionModel,
};
