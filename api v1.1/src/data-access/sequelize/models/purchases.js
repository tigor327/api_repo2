const db = require('../../config/sequelize')
const { DataTypes } = require('sequelize')

//based on the database table
const Purchase = db.define({
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity_purchased: DataTypes.INTEGER,
    cost_of_purchase: DataTypes.INTEGER,
    date_of_purchase: DataTypes.DATE,
    order_id: DataTypes.INTEGER,
    tax: DataTypes.DECIMAL},
    {freezeTableName: true}
)

module.exports = {
    Purchase
}