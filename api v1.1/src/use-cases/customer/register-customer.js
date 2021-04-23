const registerCustomer = ({ customersDb, makeCustomer_ENTITY }) => {
  return async function add(info) {
    let data = await makeCustomer_ENTITY({ info });
    let customer = {};
    data = {
      userName: data.userName(),
      userContact: data.userContact(),
      userAddress: data.userAddress(),
      userStatus: data.userStatus(),
    };
    const dupeCheck = await customersDb.checkDupe({ data });
    if (dupeCheck.rowCount > 0) {
      throw new Error("Name already exists");
    }

    const res = await customersDb.addCustomer({ data });
    console.log(
      "===============================================================================: ",
      res
    );
    let prompt;
    if (res !== undefined) {
      customer.custid = res.userid;
      customer.custName = res.userName;
      customer.custContact = res.userContact;
      customer.custAddress = res.userAddress;
      customer.custStatus = res.userStatus;
      customer.userTypeId = res.userTypeId;
      prompt = "Customer registered succesfully!";
      return {
        message: prompt,
        result: customer,
      };
    } else {
      throw new Error("Failed to register customer.");
    }
  };
};

module.exports = registerCustomer;
