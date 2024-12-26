const sqlite3 = require('sqlite3').verbose();

// подключение к бд
const db = new sqlite3.Database('./contacts.db', (err) => {
    if (err) {
        console.error('Нельзя подключиться к бд:', err);
    } else {
        console.log('Подключились к бд');
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