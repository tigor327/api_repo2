const db = require("../../config/sequelize");
const { DataTypes } = require("sequelize");

const loginModel = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      trim: true,
      require: true,
    },
    password: { type: DataTypes.STRING, trim: true, require: true },
  },

  { freezeTableName: true, timestamps: false, tableName: "users" }
);

module.exports = {
  loginModel,
};
