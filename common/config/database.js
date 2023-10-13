const sqlite3 = require('sqlite3').verbose();

// Crée une nouvelle base de données ou ouvre une existante
const db = new sqlite3.Database('./ecommerce.db');

module.exports = db;
