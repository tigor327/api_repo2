const { connects } = require('../../db-access/index')

const CustomerModel = require('./models/customer')
const ProductModel = require('./models/product')
const SupplierModel = require('./models/supplier')
const PurchaseModel = require('./models/purchases')
const OrderModel = require('./models/orders')
const DeliveryModel =  require('./models/delivery')

const services = Object.freeze({
    CustomerModel,
    ProductModel,
    SupplierModel,
    PurchaseModel,
    OrderModel,
    DeliveryModel
})


module.exports = services
module.exports = {
    CustomerModel,
    ProductModel,
    SupplierModel,
    PurchaseModel,
    OrderModel,
    DeliveryModel
}