import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Импортируем роутер и компоненты маршрутов
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContacts/AddContact";
import EditContact from "./components/EditContact"; // Импортируем компонент редактирования
import HomePage from "./components/HomePage/HomePage"
import classes from "./main.module.scss"

function App() {
    return (
        <Router>
            <div className={classes.app}>
                <header className={classes.header}>
                  <div className={classes.header__1}>
                    <h1 className={classes.title}>Сайт для всех ваших контактов</h1>
                  </div>
                  <div className={classes.header__2}>
                    <ul className={classes.list}>
                      <li className={classes.item}><a href="/">Главная</a></li>
                      <li className={classes.item}><a href="/list">Список контактов</a></li>
                      <li className={classes.item}><a href="/add">Добавление контактов</a></li>
                    </ul>
                  </div>
                </header>
                
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Главная страница - список контактов */}
                    <Route path="/list" element={<ContactList />} /> {/* Главная страница - список контактов */}
                    <Route path="/add" element={<AddContact />} /> {/* Страница добавления контакта */}
                    <Route path="/edit/:id" element={<EditContact />} /> {/* Маршрут для редактирования */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;