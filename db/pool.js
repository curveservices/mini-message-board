const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString:  process.env.DATABASE_PUBLIC_URL,
});

module.exports = pool;

