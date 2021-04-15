const removeSalesTransaction = ({ salesTransactionsDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await salesTransactionsDb.removeSalesTransaction({ id });
    let msg = `SalesTransaction was not deleted, please try again`;
    if (res == 1) msg = `SalesTransaction deleted successfully.`;
    return msg;
  };
};

module.exports = removeSalesTransaction;
