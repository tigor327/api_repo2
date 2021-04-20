const registerSalesTransaction = ({
  salesTransactionsDb,
  makeSalesTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;
    let data = await makeSalesTransaction_ENTITY({ info });

    const custName = info.custName;
    const items = info.itemsList;
    const transactionTotal = info.grandTotal;
    data = {
      custName: custName,
      transactionTotal: transactionTotal,
      items: items,
      dateAndTime: dateAndTime,
    };

    const result = await salesTransactionsDb.addSalesTransaction({ data });

    let finalResult = [];
    finalResult.push([
      {
        deliveryTransactionId: result.finalResult[0][0].transactionid,
      },
    ]);
    const itemsList = result.finalResult;

    for (var n = 1; n < itemsList.length; n++) {
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
    let prompt = result
      ? "SalesTransaction registered succesfully!"
      : "Failed to register SalesTransaction.";

    return {
      message: prompt,
      product: { finalResult },
    };
  };
};

module.exports = registerSalesTransaction;
