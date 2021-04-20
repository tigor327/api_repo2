const listDeliveryTransactions = ({ deliveryTransactionsDb }) => {
  return async function list() {
    let deliveryTransactionList = [];
    let transaction = [];

    const result = await deliveryTransactionsDb.getAllDeliveryTransactions({});
    const results = result.rows;

    for (var i = 0; i < result.rowCount; i++) {
      var row = results[i];
      var id = row.transactionid;
      let itemsListRows = [];
      var itemsList = await deliveryTransactionsDb.getAllDeliveryByIdTransactions(
        {
          id,
        }
      );

      var itemsList = itemsList.rows;
      for (var n = 0; n < itemsList.length; n++) {
        itemsListRows.push({
          id: itemsList[n].itemid,
          quantity: itemsList[n].itemQuantity,
          deliveryTransactionsId: itemsList[n].transactionid,
          subTotal: itemsList[n].subTotal,
          name: itemsList[n].itemName,
          barcode: itemsList[n].itemBarcode,
          description: itemsList[n].itemDescription,
          price: itemsList[n].itemPrice,
          supName: itemsList[n].userName,
        });
      }
      transaction.push({
        supid: row.userid,
        date: row.transactionDate,
        grandTotal: row.grandTotal,
        deliveryTransactionId: row.transactionid,
        deliveryDate: row.deliveryDate,
        supName: row.userName,
        supContact: row.userContact,
        supAddress: row.userAddress,
        supStatus: row.userStatus,
        itemsListRows,
      });

      //transaction.push(itemsListRows);
      deliveryTransactionList.push(transaction);
    }

    return transaction;
  };
};

module.exports = listDeliveryTransactions;
