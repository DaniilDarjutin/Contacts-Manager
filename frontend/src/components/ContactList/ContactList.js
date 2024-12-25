import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./ContactList.module.scss"

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/contacts")
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/contacts/${id}`)
            .then(() => {
                setContacts(contacts.filter(contact => contact.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
            });
    };

    return (
        <div>
            <h2 className={classes.title}>Список контактов</h2>
            <ul className={classes.list}>
                {contacts.map((contact) => (
                    <li className={classes.item} key={contact.id}>
                        <div className={classes.top}>
                            <span className={classes.name}>{contact.name}</span>
                            <a href={`tel:${contact.phone}`} type="tel" className={classes.phone}>{contact.phone}</a>
                            <span className={classes.email}>{contact.email}</span>
                        </div>
                        <div className={classes.bottom}>
                            <button className={classes.button__del} onClick={() => handleDelete(contact.id)}>Удалить</button>
                            <Link to={`/edit/${contact.id}`}>
                                <button className={classes.button__edit}>Изменить</button>  
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;