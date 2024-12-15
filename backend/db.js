const { Pool } = require('pg'); // Import pg module

// Set up the PostgreSQL connection pool
const pool = new Pool({
  user: 'your_database_user',        // Replace with your database username
  host: 'localhost',                 // Usually 'localhost' unless you have a remote DB
  database: 'postgres',    // Replace with your database name
  password: '1606', // Replace with your database password
  port: 5432,                        // Default port for PostgreSQL
});

// Export the pool to be used in your server.js
module.exports = pool;
