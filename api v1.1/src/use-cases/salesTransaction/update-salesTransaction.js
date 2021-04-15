const updateSalesTransaction = ({
  salesTransactionsDb,
  updateSalesTransaction_ENTITY,
}) => {
  return async function add(info) {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();

    let hour = today.getHours();
    let min = today.getMinutes() < 10 ? "0" : "" + today.getMinutes();

    let dateAndTime = `${month}-${day}-${year} ${hour}:${min}`;

    let data = await updateSalesTransaction_ENTITY({ info });
    data = {
      custname: info.custName,
      items: info.itemsList,
      transactionTotal: info.grandTotal,
      dateAndTime: dateAndTime,
      id: info.id,
    };

    const res = await salesTransactionsDb.updateSalesTransaction({ data });
    let prompt = "";
    if (res.finalResult.length >= 2) {
      prompt = "SalesTransactions updated succesfully!";
    } else {
      prompt = "Failed to update salesTransaction.";
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateSalesTransaction;
