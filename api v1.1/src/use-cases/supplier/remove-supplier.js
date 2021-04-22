const removeSupplier = ({ suppliersDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await suppliersDb.removeSupplier({ id });
    let msg;
    try {
      if (res == 1) {
        msg = `Supplier deleted successfully.`;
      } else {
        throw new Error("Supplier was not deleted, please try again");
      }
    } catch (e) {
      console.log("Error: ", e);
      msg = "Supplier was not deleted, please try again";
      return msg;
    }
    return msg;
  };
};

module.exports = removeSupplier;
