//const isValidName = require("../../helper/isValidName");

const makeDeliveryTransaction = ({ info }) => {
  console.log("info=====================: ", info);
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;

  var userName = info.supName;
  const deliveryDate = info.deliveryDate;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;

  console.log(
    "ITEMSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS: ",
    items
  );
  //const { custid, totalPrice, items } = info;

  if (!userName) {
    supid = 1;
    userName = "Unregistered Supplier";
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

  // return Object.freeze({
  //   userName: () => userName,
  //   totalPrice: () => totalPrice,
  //   items: () => items,
  //   dateAndTime: () => dateAndTime,
  //   deliveryDate: () => deliveryDate,
  // });
  // }
};
//custid, totalPrice, items

module.exports = makeDeliveryTransaction;
