const isValidName = require("../../helper/isValidName");

const update = ({ info }) => {
  //return function make(id, {fullname, contact, address} = {})

  const { supName, supContact, supAddress, id } = info;
  const fname = isValidName(supName);
  const supStatus = "Inactive";

  if (!id) {
    throw new Error("Invalid supplier id");
  }
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
};

module.exports = update;
