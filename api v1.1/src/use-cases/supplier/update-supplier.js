const updateSupplier = ({ suppliersDb, updateSupplier_ENTITY }) => {
  return async function add(info) {
    let data = await updateSupplier_ENTITY({ info });
    let result = {};
    data = {
      supName: info.supName,
      supContact: info.supContact,
      supAddress: info.supAddress,
      supStatus: info.supStatus,
      id: info.id,
    };

    const res = await suppliersDb.updateSupplier({ data });

    if (res) {
      result.supid = res[0].userid;
      result.supName = res[0].userName;
      result.supContact = res[0].userContact;
      result.supAddress = res[0].userAddress;
      result.supStatus = res[0].userStatus;
      result.userTypeId = res[0].userTypeId;
    }
    let prompt = res
      ? "Supplier updated succesfully!"
      : "Failed to update supplier.";
    return {
      message: prompt,
      product: [result],
    };
  };
};

module.exports = updateSupplier;
