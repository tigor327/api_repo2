const registerDeliveryTransaction = ({
  deliveryTransactionsDb,
  makeDeliveryTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await makeDeliveryTransaction_ENTITY({ info });

    const deliveryDate = info.deliveryDate;
    const userName = info.supName;
    const items = info.itemsList;
    const totalPrice = info.grandTotal;
    data = {
      userName: userName,
      totalPrice: totalPrice,
      items: items,
      dateAndTime: dateAndTime,
      deliveryDate: deliveryDate,
    };

    const res = await deliveryTransactionsDb.addDeliveryTransaction({ data });

    let prompt = res
      ? "DeliveryTransaction registered succesfully!"
      : "Failed to register deliveryTransaction.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = registerDeliveryTransaction;
