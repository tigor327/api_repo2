const listDeliveryByIdTransactions = ({ deliveryTransactionsDb }) => {
  return async function list(info) {
    const { id } = info;
    let deliveryByIdTransactionList = [];
    const result = await deliveryTransactionsDb.getAllDeliveryByIdTransactions({
      id,
    });
    //console.log(result.rows);
    if (result.rowCount > 0) {
      const deliveryByIdTransactions = result.rows;
      deliveryByIdTransactions.map((deliveryByIdTransaction) =>
        deliveryByIdTransactionList.push(deliveryByIdTransaction)
      );
    } else {
      return "transaction does not exist.";
    }

    return deliveryByIdTransactionList;
  };
};

module.exports = listDeliveryByIdTransactions;
