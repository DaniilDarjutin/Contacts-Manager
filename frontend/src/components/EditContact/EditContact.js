import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./EditContact.module.scss"

const EditContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/api/contacts/${id}`)
            .then((response) => {
                const contact = response.data;
                setName(contact.name);
                setPhone(contact.phone);
                setEmail(contact.email);
            })
            .catch((error) => {
                console.error("Error fetching contact:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/api/contacts/${id}`, { name, phone, email })
            .then(() => {
                alert("Contact updated successfully!");
                navigate("/list");
            })
            .catch((error) => {
                console.error("Error updating contact:", error);
            });
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.title}>Редактирование контакта</h2>
            <div className={classes.input}>
                <label className={classes.label}>Имя:</label>
                <input className={classes.field} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={classes.input}>
                <label className={classes.label}>Телефон:</label>
                <input className={classes.field} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={classes.input}>
                <label className={classes.label}>Почта:</label>
                <input className={classes.field} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className={classes.button} type="submit">Сохранить изменения</button>
        </form>
    );
};

export default EditContact;