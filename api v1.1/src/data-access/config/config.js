require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    schema: process.env.DB_SCHEMA,
    dialect: "postgres",
    logging: false,
    JWTSecret: process.env.SECRET_KEY,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.TESTDB_NAME,
    schema: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  },
  // production: {
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // dialect: "postgres",
  // logging: false
  // }
};
