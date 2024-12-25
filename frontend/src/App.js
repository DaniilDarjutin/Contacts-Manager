import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList/ContactList";
import AddContact from "./components/AddContacts/AddContact";
import EditContact from "./components/EditContact/EditContact";
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
                    <Route path="/" element={<HomePage />} />
                    <Route path="/list" element={<ContactList />} />
                    <Route path="/add" element={<AddContact />} />
                    <Route path="/edit/:id" element={<EditContact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;