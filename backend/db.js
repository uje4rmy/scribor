const mysql = require("mysql2/promise");

async function connectDB() {
  try {
    const connectCreds = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };

    const connection = await mysql.createConnection(connectCreds);
    console.log(`Connected to ${connectCreds.database} database`);
    return connection;
  } catch (error) {
    console.error("Error connecting to database: ", error);
    throw error;
  }
}

module.exports = { connectDB };
