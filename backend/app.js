const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const contactsRoutes = require('./routes/contacts');

const app = express();

app.use(cors()); // разрешение запросов с других доменов
app.use(bodyParser.json()); // обработка JSON в запросах

app.get('/', (req, res) => {  // начальный маршрут
    res.send('API is working!');
});

app.use('/api/contacts', contactsRoutes); // роуты для управления контактами

const PORT = 3001; // запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});