const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const CustomerModel = db.define(
  "customer",
  {
    userid: { type: DataTypes.INTEGER, primaryKey: true },
    userName: { type: DataTypes.STRING },
    userContact: { type: DataTypes.STRING },
    userAddress: { type: DataTypes.STRING },
    userStatus: { type: DataTypes.STRING },
    userTypeId: { type: DataTypes.INTEGER },
    password: { type: DataTypes.STRING },
  },
  { freezeTableName: true, timestamps: false, tableName: "users" }
);

module.exports = {
  CustomerModel,
};
