const listSuppliers = ({ suppliersDb }) => {
  return async function list() {
    let supplierList = [];
    const result = await suppliersDb.getAllSuppliers({});

    try {
      if (result.rowCount > 0) {
        for (let data of result.rows) {
          const dataValue = {};
          dataValue.supid = data.userid;
          dataValue.supName = data.userName;
          dataValue.supContact = data.userContact;
          dataValue.supAddress = data.userAddress;
          dataValue.supStatus = data.userStatus;
          dataValue.userTypeId = data.userTypeId;
          supplierList.push(dataValue);
        }
      } else {
        throw new Error("No Suppliers Found.");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
    return supplierList;
  };
};

module.exports = listSuppliers;
