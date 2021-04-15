const db = require('../../config/sequelize')
const { DataTypes, Sequelize } = require('sequelize')

const DeliveryModel = db.define('delivery',{
    delivery_id: {type: DataTypes.INTEGER, primaryKey: true},
    date_received: {type: DataTypes.DATE
        // , defaultValue: Sequelize.NOW
    },
    product_id: {type: DataTypes.INTEGER},
    quantity_received: {type: DataTypes.INTEGER},
    cost_per_unit: {type: DataTypes.DECIMAL}},
    {freezeTableName: true, 
        timestamps:false,
        tableName: 'delivery'}
)

module.exports = {
    DeliveryModel
}