import { Pool } from 'pg'
 
const db = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'notes',
  user: 'jnotes',
  password: 'note123',
});

module.exports = db;  