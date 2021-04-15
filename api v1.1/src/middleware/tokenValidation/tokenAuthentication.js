const jwt = require("jsonwebtoken");
const config = require("../../data-access/config/config");
function getTokenFromHeaders(req) {
  const token = req.body.token || req.query.token || req.headers["token"];

  return token;
}

function validateToken(req, res, next) {
  const token = getTokenFromHeaders(req);
  if (token) {
    jwt.verify(token, config.development.JWTSecret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "Failed to authenticate token.",
        });
      } else {
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
