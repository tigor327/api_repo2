const removeSalesTransaction = ({ salesTransactionsDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await salesTransactionsDb.removeSalesTransaction({ id });

    let msg;
    if (res == 1) {
      msg = `SalesTransaction deleted successfully.`;
    } else {
      throw new Error(`SalesTransaction was not deleted, please try again`);
    }
    return msg;
  };
};
`SalesTransaction was not deleted, please try again`;
module.exports = removeSalesTransaction;
