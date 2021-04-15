const updateCustomer = ({ customersDb, updateCustomer_ENTITY }) => {
  return async function add(info) {
    let data = await updateCustomer_ENTITY({ info });
    let result = [];
    let customer = {};
    data = {
      custName: info.custName,
      custContact: info.custContact,
      custAddress: info.custAddress,
      custStatus: info.custStatus,
      id: info.id,
    };

    const res = await customersDb.updateCustomer({ data });
    if (res) {
      customer.custid = res[0].userid;
      customer.custName = res[0].userName;
      customer.custContact = res[0].userContact;
      customer.custAddress = res[0].userAddress;
      customer.custStatus = res[0].userStatus;
      customer.userTypeId = res[0].userTypeId;
    }
    result.push(customer);
    let prompt = res
      ? "Customer updated succesfully!"
      : "Failed to update customer.";

    return {
      message: prompt,
      product: result,
    };
  };
};

module.exports = updateCustomer;
