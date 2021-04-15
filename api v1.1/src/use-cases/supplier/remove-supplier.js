const removeSupplier = ({ suppliersDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await suppliersDb.removeSupplier({ id });
    let msg = `Supplier was not deleted, please try again`;
    if (res == 1) msg = `Supplier deleted successfully.`;
    return msg;
  };
};

module.exports = removeSupplier;
