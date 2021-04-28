const jwt = require("jsonwebtoken");
const config = require("../../data-access/config/config");
const loginDb = require("../../data-access/login/index");
function getTokenFromHeaders(req) {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["token"] ||
    req.headers.authorization;

  return token;
}

const dbToken = ({ loginDb }) => {
  return async function getTokenFromDB(data) {
    let tokenDB = await loginDb.getToken({ data });
    return tokenDB;
  };
};

async function validateToken(req, res, next) {
  let token = getTokenFromHeaders(req);
  // let data = getData(req);
  let tokenDB = dbToken({ loginDb });

  if (token) {
    if (token.includes(" ")) {
      token = token.split(" ")[1];
    }
    let tok = await tokenDB(token);

    console.log("tok FromDB: ", tok.rowCount);
    //may add if statement to verify only if the token is present in the database.
    if (tok.rowCount > 0) {
      console.log("START VERIFICATION");
      jwt.verify(token, config.development.JWTSecret, (err, decoded) => {
        if (err) {
          console.log("VALIDATION not valid: ", token);

          return res.json({
            success: false,
            message: "Failed to authenticate token.",
          });
        } else {
          console.log(
            "token-----------------------------------------------------------------------------------------------token------------------------------------------------------token",
            dbToken
          );
        }
        console.log("VALIDATION valid: ", token);
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).send({
        message: "FORBIDDEN",
      });
    }
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
}

module.exports = validateToken;

("eyJhbGciOiJIUzI1NiJ9.YWRtaW4.23a2LfcEJ7pbe5mqaW8cJ7kPr_e6jI3JLb9gXSf2h_k");
