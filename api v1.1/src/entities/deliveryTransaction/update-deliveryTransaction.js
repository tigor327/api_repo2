const updateDeliveryTransaction = ({ info }) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let day = today.getDate();

  let hour = today.getHours();
  let min = today.getMinutes();

  let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
  const userName = info.supName;
  const deliveryDate = info.deliveryDate;
  const items = info.itemsList;
  const totalPrice = info.grandTotal;
  //const { custid, totalPrice, items } = info;

  if (!userName) {
    throw new Error("Please enter full name");
  }
  if (!totalPrice) {
    throw new Error("Please enter grand total");
  }
  if (!items) {
    throw new Error("Please add items");
  }
  if (!deliveryDate) {
    throw new Error("Please enter deliveryDate");
  }

  // return Object.freeze({
  //   userName: () => userName,
  //   totalPrice: () => totalPrice,
  //   items: () => items,
  //   dateAndTime: () => dateAndTime,
  //   deliveryDate: () => deliveryDate,
  // });
};

module.exports = updateDeliveryTransaction;
