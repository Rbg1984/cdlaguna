const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // o tus parámetros de conexión manualmente
  ssl: { rejectUnauthorized: false }, // para PostgreSQL en la nube
});

module.exports = pool;
