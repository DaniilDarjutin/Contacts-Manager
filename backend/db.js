const sqlite3 = require('sqlite3').verbose();

// подключение к бд
const db = new sqlite3.Database('./contacts.db', (err) => {
    if (err) {
        console.error('Could not connect to database:', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL
        )
    `);
});

module.exports = db;