// Импорт модулей
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Подключение к базе данных
const contactsRoutes = require('./routes/contacts'); // Подключение маршрутов для контактов

// Создание приложения Express
const app = express();

// Middleware
app.use(cors()); // Разрешение запросов с других доменов
app.use(bodyParser.json()); // Обработка JSON в запросах

// Базовый тестовый маршрут
app.get('/', (req, res) => {
    res.send('API is working!');
});

// Маршруты для управления контактами
app.use('/api/contacts', contactsRoutes);

// Запуск сервера
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});