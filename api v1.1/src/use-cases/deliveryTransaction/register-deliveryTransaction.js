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
    let min = today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await makeDeliveryTransaction_ENTITY({ info });
    let prompt;

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

    const result = await deliveryTransactionsDb.addDeliveryTransaction({
      data,
    });
    console.log(
      "====================================================: ",
      result
    );

    if (result.finalResult[0] !== undefined) {
      let finalResult = [];
      finalResult.push([
        {
          deliveryTransactionId: result.finalResult[0][0].transactionid,
        },
      ]);
      const itemsList = result.finalResult[1];

      for (var n = 0; n < itemsList.length; n++) {
        finalResult.push(itemsList[n]);
        n += 1;

        finalResult.push([
          {
            id: itemsList[n][0].itemid,
            name: itemsList[n][0].itemName,
            price: itemsList[n][0].itemPrice,
            quantity: itemsList[n][0].itemQuantity,
            subtotal: itemsList[n][0].subTotal,
          },
        ]);
      }
      prompt = "DeliveryTransaction registered succesfully!";
      return {
        message: prompt,
        product: { finalResult },
      };
    } else {
      throw new Error("Failed to register deliveryTransaction.");
    }
  };
};

module.exports = registerDeliveryTransaction;
