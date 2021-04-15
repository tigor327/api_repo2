const removeDeliveryTransaction = ({ deliveryTransactionsDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await deliveryTransactionsDb.removeDeliveryTransaction({ id });
    let msg = `DeliveryTransaction was not deleted, please try again`;
    if (res == 1) msg = `DeliveryTransaction deleted successfully.`;
    return msg;
  };
};

module.exports = removeDeliveryTransaction;
