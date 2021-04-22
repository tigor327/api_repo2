const jwt = require("jsonwebtoken");
const config = require("../../data-access/config/config");
function getTokenFromHeaders(req) {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["token"] ||
    req.headers.authorization;

  return token;
}
function validateToken(req, res, next) {
  let token = getTokenFromHeaders(req);

  if (token) {
    if (token.includes(" ")) {
      token = token.split(" ")[1];
    }
    jwt.verify(token, config.development.JWTSecret, (err, decoded) => {
      if (err) {
        console.log("VALIDATION not valid: ", token);

        return res.json({
          success: false,
          message: "Failed to authenticate token.",
        });
      } else {
        console.log("VALIDATION valid: ", token);
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }
}

module.exports = validateToken;
