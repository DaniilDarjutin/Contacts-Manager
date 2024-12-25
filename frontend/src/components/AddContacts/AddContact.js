import React, { useState } from "react";
import axios from "axios";
import classes from "./AddContact.module.scss"


const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/api/contacts", { name, phone, email })
            .then(() => {
                alert("Contact added successfully!");
                setName("");
                setPhone("");
                setEmail("");
            })
            .catch((error) => {
                console.error("Error adding contact:", error);
            });
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.title}>Добавление контактов</h2>
            <div className={classes.input}>
                <label className={classes.label}>Имя:</label>
                <input className={classes.field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван"/>
            </div>
            <div className={classes.input}>
                <label className={classes.label}>Телефон:</label>
                <input className={classes.field} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 916 940 85 81"/>
            </div>
            <div className={classes.input}>
                <label className={classes.label}>Почта:</label>
                <input className={classes.field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>
            </div>
            <button className={classes.button} type="submit">Добавить контакт</button>
        </form>
    );
};

export default AddContact;