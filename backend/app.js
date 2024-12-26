const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const contactsRoutes = require('./routes/contacts');

const app = express();

app.use(cors()); // разрешение запросов с других доменов
app.use(bodyParser.json()); // обработка JSON в запросах

app.get('/', (req, res) => {  // тестовый маршрут
    res.send('API работает');
});

app.use('/api/contacts', contactsRoutes); // роуты для управления контактами

const PORT = 3001; // запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});