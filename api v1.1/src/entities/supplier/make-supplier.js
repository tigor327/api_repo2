const isValidName = require("../../helper/isValidName");

const makeSupplier = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { supName, supContact, supAddress } = info;
  const fname = isValidName(supName);
  const supStatus = "Active";

  if (!supName) {
    throw new Error("Please enter full name");
  }
  if (!supAddress || supAddress.trim().length === 0) {
    throw new Error("Please enter address");
  }
  if (!supContact || supContact.trim().length === 0) {
    throw new Error("Please enter contact information");
  }
  if (!fname) {
    throw new Error("Invalid chars aren't allowed as name");
  }

  return Object.freeze({
    supName: () => supName,
    supContact: () => supContact,
    supAddress: () => supAddress,
    supStatus: () => supStatus,
  });
  // }
};

module.exports = makeSupplier;
