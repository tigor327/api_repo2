const makeLogin = ({ info }) => {
  // return function make({fullname, contact, address} = {}) {
  const { userName, password } = info;

  if (!userName) {
    throw new Error("Please enter username");
  }
  if (!password) {
    throw new Error("Please enter password");
  }

  return Object.freeze({
    //item id foreign key
    userName: () => userName,
    password: () => password,
  });
  // }
};

module.exports = makeLogin;
