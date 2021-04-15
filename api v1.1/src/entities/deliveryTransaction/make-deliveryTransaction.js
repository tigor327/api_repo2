//const isValidName = require("../../helper/isValidName");

const makeDeliveryTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  if (!info) {
    throw new Error("Missing inputs or Incorect Format");
  }
  if (!info.itemsList) {
    throw new Error("No items added!");
  }
  const userName = info.custName;
  const deliveryDate = info.deliveryDate;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  //const { custid, totalPrice, items } = info;

  if (!userName) {
    supid = 1;
  }
  if (!deliveryDate) {
    throw new Error("Please enter delivery date.");
  }
  if (!totalPrice) {
    throw new Error("Please enter grand total");
  }
  if (!items) {
    throw new Error("Please add items");
  }

  return Object.freeze({
    userName: () => userName,
    totalPrice: () => totalPrice,
    items: () => items,
    dateAndTime: () => dateAndTime,
    deliveryDate: () => deliveryDate,
  });
  // }
};
//custid, totalPrice, items

module.exports = makeDeliveryTransaction;
