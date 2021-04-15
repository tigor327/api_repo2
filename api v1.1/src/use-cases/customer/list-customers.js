const listCustomers = ({ customersDb }) => {
  return async function list() {
    let customerList = [];
    const result = await customersDb.getAllCustomers({});
    if (result.rowCount > 0) {
      for (let data of result.rows) {
        const dataValue = {};
        dataValue.custid = data.userid;
        dataValue.custName = data.userName;
        dataValue.custContact = data.userContact;
        dataValue.custAddress = data.userAddress;
        dataValue.custStatus = data.userStatus;
        dataValue.userTypeId = data.userTypeId;
        customerList.push(dataValue);
      }
    }

    return customerList;
  };
};

module.exports = listCustomers;
