const db = require('../../config/sequelize')
const { DataTypes } = require('sequelize')

const OrderModel = db.define({
    id: DataTypes.STRING,
    date_received: DataTypes.DATE,
    barcode: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity_received: DataTypes.INTEGER,
    cost_per_unit: DataTypes.INTEGER},
    {freezeTableName: true}
)

module.exports = {
    OrderModel
}