const isValidName = require("../../helper/isValidName");

const makeSalesTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  if (!info.itemsList || info.itemsList.length < 1) {
    throw new Error("No items added!");
  }
  let custName = info.custName;
  const items = info.itemsList;
  const transactionTotal = info.grandTotal;
  //const { custid, transactionTotal, items } = info;

  if (!custName) {
    info.custName = "Unregistered Customer";
  }
  if (!transactionTotal) {
    throw new Error("Please enter grand total.");
  }

  // return Object.freeze({
  //   custName: () => custid,
  //   transactionTotal: () => transactionTotal,
  //   items: () => items,
  //   dateAndTime: () => dateAndTime,
  // });
};
//custid, totalPrice, items

module.exports = makeSalesTransaction;
