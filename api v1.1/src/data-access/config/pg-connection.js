const connect = ({ dotenv, pg }) => {
  return async function conn() {
    dotenv.config();
    const { Pool } = pg;

    let config = null;

    const env = process.env.NODE_ENV;

    if (env == "development") {
      config = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        schema: process.env.DB_SCHEMA,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
      };
    }

    if (env == "test") {
      config = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        schema: process.env.DB_SCHEMA,
        password: process.env.DB_PASS,
        database: process.env.TESTDB_NAME,
        port: process.env.DB_PORT,
      };
    }

    const pool = new Pool(config);

    return pool;
  };
};

module.exports = connect;
