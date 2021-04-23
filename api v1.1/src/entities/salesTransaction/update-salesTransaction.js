const isValidName = require("../../helper/isValidName");

const updateSalesTransaction = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes();
  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  console.log("info:-- ", info);

  if (!info.itemsList || info.itemsList.length < 1) {
    throw new Error("No items added");
  }

  let custName = info.custName;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  if (!custName) {
    custName = "Unregistered Customer";
  }

  if (!totalPrice) {
    throw new Error("No Grand Total Added.");
  }

  // return Object.freeze({
  //   custName: () => custName,
  //   total: () => total,
  //   items: () => items,
  //   dateAndTime: () => dateAndTime,
  // });
};

module.exports = updateSalesTransaction;
