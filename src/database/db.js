require("dotenv").config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING
});

async function connect() {
  try {
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    return client;
  } catch (error) {
    throw new Error('Erro ao conectar:', error);
  }
}

module.exports = {
  connect
};
