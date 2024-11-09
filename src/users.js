import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/database/users.db");
db.run("PRAGMA busy_timeout = 5000;");
db.run("PRAGMA journal_mode=WAL;");
db.run(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        fullname TEXT NOT NULL,
        role TEXT NOT NULL
    )`);
export default db;
