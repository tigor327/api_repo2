const removeCustomer = ({ customersDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await customersDb.removeCustomer({ id });
    let msg = `Customer was not deleted, please try again`;
    if (res == 1) msg = `Customer deleted successfully.`;
    return msg;
  };
};

module.exports = removeCustomer;
