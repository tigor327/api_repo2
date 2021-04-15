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

    const res = await salesTransactionsDb.addSalesTransaction({ data });

    let prompt = res
      ? "SalesTransaction registered succesfully!"
      : "Failed to register salesTransaction.";

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = registerSalesTransaction;
