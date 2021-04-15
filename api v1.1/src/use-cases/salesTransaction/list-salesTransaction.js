const listSalesTransactions = ({ salesTransactionsDb }) => {
  return async function list() {
    let salesTransactionList = [];
    let transaction = [];

    const result = await salesTransactionsDb.getAllSalesTransactions({});
    const results = result.rows;

    for (var i = 0; i < result.rowCount; i++) {
      var row = results[i];
      var id = row.transactionid;
      let itemsListRows = [];
      var itemsList = await salesTransactionsDb.getAllSalesByIdTransactions({
        id,
      });

      var itemsList = itemsList.rows;
      for (var n = 0; n < itemsList.length; n++) {
        itemsListRows.push({
          id: itemsList[n].itemid,
          quantity: itemsList[n].itemQuantity,
          salesTransactionsId: itemsList[n].transactionid,
          subTotal: itemsList[n].subTotal,
          name: itemsList[n].itemName,
          barcode: itemsList[n].itemBarcode,
          description: itemsList[n].itemDescription,
          price: itemsList[n].itemPrice,
          supName: itemsList[n].userName,
        });
      }
      salesTransactionList.push({
        custid: row.userid,
        date: row.transactionDate,
        grandTotal: row.grandTotal,
        salesTransactionId: row.transactionid,
        custName: row.userName,
        custContact: row.userContact,
        custAddress: row.userAddress,
        custStatus: row.userStatus,
        itemsListRows,
      });
    }

    return salesTransactionList;
  };
};

module.exports = listSalesTransactions;
