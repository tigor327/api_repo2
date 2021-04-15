const updateDeliveryTransactions = ({
  deliveryTransactionsDb,
  updateDeliveryTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await updateDeliveryTransaction_ENTITY({ info });

    const deliveryDate = info.deliveryDate;
    const supName = info.supName;
    const items = info.itemsList;
    const totalPrice = info.grandTotal;
    const id = info.id;
    data = {
      userName: supName,
      totalPrice: totalPrice,
      items: items,
      dateAndTime: dateAndTime,
      deliveryDate: deliveryDate,
      id: id,
    };

    const res = await deliveryTransactionsDb.updateDeliveryTransaction({
      data,
    });
    let prompt = "";
    if (res.res == 1) {
      prompt = "DeliveryTransactions updated succesfully!";
    } else {
      prompt = "Failed to update deliveryTransaction.";
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateDeliveryTransactions;
