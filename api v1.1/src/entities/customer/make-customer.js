const isValidName = require("../../helper/isValidName");

const makeCustomer = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  //const { userName, userContact, userAddress, userStatus } = info;
  const userName = info.custName;
  const userContact = info.custContact;
  const userAddress = info.custAddress;
  var userStatus = info.custStatus;
  const fname = isValidName(userName);

  if (!userStatus) {
    userStatus = "Active";
  }
  if (!userName) {
    throw new Error("Please enter full name");
  }
  if (!userAddress || userAddress.trim().length === 0) {
    throw new Error("Please enter address");
  }
  if (!userContact || userContact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!fname) {
    throw new Error("Invalid chars aren't allowed as name!");
  }

  return Object.freeze({
    userName: () => userName,
    userContact: () => userContact,
    userAddress: () => userAddress,
    userStatus: () => userStatus,
  });
  // }
};

module.exports = makeCustomer;
