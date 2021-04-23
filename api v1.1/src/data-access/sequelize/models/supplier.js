const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const SupplierModel = db.define(
  "supplier",
  {
    userid: { type: DataTypes.INTEGER, primaryKey: true },
    userName: DataTypes.STRING,
    userContact: DataTypes.STRING,
    userAddress: DataTypes.STRING,
    userStatus: DataTypes.STRING,
    userTypeId: DataTypes.INTEGER,
    password: DataTypes.STRING,
  },
  { freezeTableName: true, timestamps: false, tableName: "users" }
);

module.exports = {
  SupplierModel,
};
