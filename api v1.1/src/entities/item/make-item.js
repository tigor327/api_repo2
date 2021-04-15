const makeItem = ({ info }) => {
  // return function make({itemName, subDescription, barcode, quantity, costPerUnit, supplierId} = {}) {

  const { name, barcode, description, supName, price } = info;
  var itemStatus = info.itemStatus;
  var quantity = info.quantity;

  if (!name) {
    throw new Error("Item name can't be blank!");
  }
  if (!itemStatus) {
    itemStatus = "Active";
  }
  if (!barcode) {
    throw new Error("barcode can't be blank!");
  }
  if (!description) {
    throw new Error("description can't be blank!");
  }
  if (!supName) {
    throw new Error("supplier id can't be blank!");
  }
  if (!quantity) {
    quantity = 0;
  }
  if (isNaN(quantity)) {
    throw new Error("Quantity has to be a number!");
  }
  if (!price) {
    throw new Error("Item price can't be blank!");
  }
  if (isNaN(price)) {
    throw new Error("Item price has to be a number!");
  }

  return Object.freeze({
    itemName: name,
    itemBarcode: barcode,
    itemDescription: description,
    userName: supName,
    itemPrice: price,
    itemQuantity: quantity,
    itemStatus: itemStatus,
  });
  // }
};
module.exports = makeItem;
