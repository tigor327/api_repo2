const makeCustomer_ENTITY = require('./make-customer')
const updateCustomer_ENTITY = require('./update-customer')

const services = Object.freeze({makeCustomer_ENTITY, updateCustomer_ENTITY})

module.exports = services
module.exports = { makeCustomer_ENTITY, updateCustomer_ENTITY }