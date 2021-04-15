const listSalesByIdTransactions = ({ salesTransactionsDb }) => {
  return async function list(info) {
    const { id } = info;
    let salesByIdTransactionList = [];
    const result = await salesTransactionsDb.getAllSalesByIdTransactions({
      id,
    });
    //console.log(result.rows);
    if (result.rowCount > 0) {
      const salesByIdTransactions = result.rows;
      salesByIdTransactions.map((salesByIdTransaction) =>
        salesByIdTransactionList.push(salesByIdTransaction)
      );
    } else {
      return "transaction does not exist.";
    }

    return salesByIdTransactionList;
  };
};

module.exports = listSalesByIdTransactions;
