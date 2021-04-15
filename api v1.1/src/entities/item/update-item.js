const updateItem_ENTITY = ({ info }) => {
  // return function make({itemName, subDescription, barcode, quantity, costPerUnit, supplierId} = {}) {

  const {
    name,
    barcode,
    description,
    supName,
    price,
    quantity,
    itemStatus,
    id,
  } = info;
  if (!id) {
    throw new Error("please provide id");
  }
  if (!name) {
    throw new Error("Item name can't be blank!");
  }
  if (!supName) {
    throw new Error("supplier name name can't be blank!");
  }
  if (!barcode) {
    throw new Error("barcode can't be blank!");
  }
  if (!description) {
    throw new Error("description can't be blank!");
  }
  if (!price) {
    throw new Error("Item price can't be blank!");
  }
  if (!quantity) {
    throw new Error("Item quantity can't be blank!");
  }
  return Object.freeze({
    id: id,
    name: name,
    barcode: barcode,
    description: description,
    userName: supName,
    price: price,
    quantity: quantity,
    itemStatus: itemStatus,
  });
  // }
};

module.exports = updateItem_ENTITY;
