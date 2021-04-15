const reg = /^[\w'\-,.][^0-9_!¡?÷?¿\\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

function isValidName(name) {
  return reg.test(name);
}

module.exports = isValidName;
