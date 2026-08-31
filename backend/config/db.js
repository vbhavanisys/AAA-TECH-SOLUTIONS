const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Database configuration with environment variable support
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'aaa_tech_solutions',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
};

// Create a connection pool using mysql2/promise
const pool = mysql.createPool(dbConfig);

// Safe connection verification
pool.getConnection()
  .then((conn) => {
    console.log(`✅ MySQL Connected Successfully: ${dbConfig.database}@${dbConfig.host}:${dbConfig.port}`);
    conn.release();
  })
  .catch((err) => {
    console.error(`❌ MySQL Connection Failed [${dbConfig.database}@${dbConfig.host}]:`, err.message);
  });

module.exports = pool;
