const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool();

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      text VARCHAR ( 255 ) NOT NULL,
      "user" VARCHAR ( 100 ) NOT NULL,
      added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log("Messages table created");
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

createTable();
