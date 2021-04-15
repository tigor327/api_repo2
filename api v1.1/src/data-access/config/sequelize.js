const Sequelize = require("sequelize");
require("dotenv").config();

// const db = ({dotenv}) => {
// 	return async function sqlz(){
// 		dotenv.config()

// 		let connection

// 		let env = process.env.NODE_ENV

// 		if (env == 'development') {
// 			connection = new  Sequelize(
// 				process.env.DB_NAME,
// 				process.env.DB_USER,
// 				process.env.DB_PASS,
// 				{
// 							host: process.env.DB_HOST,
// 							dialect: 'postgres',
// 							omitNull: true
// 			})
// 		}

// 		if (env == 'test') {
// 			connection = new  Sequelize(
// 				process.env.TESTDB_NAME,
// 				process.env.DB_USER,
// 				process.env.DB_PASS,
// 				{
// 							host: process.env.DB_HOST,
// 							dialect: 'postgres',
// 							omitNull: true
// 			})
// 			console.log("You're using test connection")
// 		}

// 		return connection
// 	}
// }

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,

  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    omitNull: true,
  }
);
