const isValidName = require("../../helper/isValidName");

const updateSalesTransaction = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})
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
  if (info.itemsList.length < 1) {
    throw new Error("No items added");
  }

  const custName = info.custName;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  if (!custName) {
    custName = "Unregistered Customer";
  }

  if (!items) {
    throw new Error("Invalid chars aren't allowed as name");
  }
  if (!totalPrice) {
    throw new Error("Invalid chars aren't allowed as name");
  }

  return Object.freeze({
    custName: () => custName,
    total: () => total,
    items: () => items,
    dateAndTime: () => dateAndTime,
  });
};

module.exports = updateSalesTransaction;
