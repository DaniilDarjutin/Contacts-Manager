const express = require('express');
const router = express.Router();
const db = require('../db');

// Получение всех контактов
router.get('/', (req, res) => {
    db.all('SELECT * FROM contacts', [], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Получение контакта по id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM contacts WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        } else if (!row) {
            console.log(err);
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.json(row);
        }
    });
});

// Создание нового контакта
router.post('/', (req, res) => {
    const { name, phone, email } = req.body;
    db.run('INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)', [name, phone, email], function (err) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: this.lastID });
        }
    });
});

// Редактирование контакта
router.put('/:id', (req, res) => {
    const { name, phone, email } = req.body;
    const { id } = req.params;
    db.run(
        'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?',
        [name, phone, email, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ changes: this.changes });
            }
        }
    );
});

// Удаление контакта
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM contacts WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ changes: this.changes });
        }
    });
});


module.exports = router;