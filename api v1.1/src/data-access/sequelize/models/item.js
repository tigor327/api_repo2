const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const ItemModel = db.define(
  "item",
  {
    itemid: { type: DataTypes.INTEGER, primaryKey: true },
    itemName: { type: DataTypes.STRING },
    itemBarcode: { type: DataTypes.STRING },
    itemDescription: { type: DataTypes.STRING },
    userid: { type: DataTypes.INTEGER },
    itemPrice: { type: DataTypes.DECIMAL },
    itemQuantity: { type: DataTypes.INTEGER },
    itemStatus: { type: DataTypes.STRING },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "items",
  }
);

module.exports = {
  ItemModel,
};
