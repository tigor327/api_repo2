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
    let min = today.getMinutes();

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

    let prompt;

    if (res !== undefined) {
      prompt = "DeliveryTransactions updated succesfully!";
      return {
        message: prompt,
        product: res,
      };
    } else {
      throw new Error("Failed to update deliveryTransaction.");
    }
  };
};

module.exports = updateDeliveryTransactions;
