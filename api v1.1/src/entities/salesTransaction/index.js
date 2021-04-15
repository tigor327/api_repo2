const makeSalesTransaction_ENTITY = require("./make-salesTransaction");
const updateSalesTransaction_ENTITY = require("./update-salesTransaction");

const services = Object.freeze({
  makeSalesTransaction_ENTITY,
  updateSalesTransaction_ENTITY,
});

module.exports = services;
module.exports = { makeSalesTransaction_ENTITY, updateSalesTransaction_ENTITY };
