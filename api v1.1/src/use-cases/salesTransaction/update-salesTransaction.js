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
    let min = today.getMinutes();
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
    console.log(
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^: ",
      res
    );
    let prompt = "";
    if (res) {
      prompt = "SalesTransactions updated succesfully!";
    } else {
      prompt = "Failed to update salesTransaction.";
      throw new Error(prompt);
    }

    return {
      message: prompt,
      product: res,
    };
  };
};

module.exports = updateSalesTransaction;
