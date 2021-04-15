const db = require('../../config/sequelize')
const { DataTypes } = require('sequelize')

const User = db.define('users',{
    user_id: {type: DataTypes.INTEGER, primaryKey: true},
    username: {type: DataTypes.STRING, unique: true, trim:true, require:true},
    role: DataTypes.ENUM('customer','employee','admin'),
    password: {type: DataTypes.STRING, trim: true, require: true}},
    {freezeTableName: true, 
    timestamps:false,
    tableName: 'users'}
)

module.exports = {
    User
}