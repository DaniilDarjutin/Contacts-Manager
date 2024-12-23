import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Для ссылки на страницу редактирования

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    // Получение контактов при загрузке компонента
    useEffect(() => {
        axios.get("http://localhost:3001/api/contacts")
            .then((response) => {
                setContacts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error);
            });
    }, []);

    // Удаление контакта
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/contacts/${id}`)
            .then(() => {
                setContacts(contacts.filter(contact => contact.id !== id)); // Обновляем список после удаления
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
            });
    };

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phone} - {contact.email}
                        <button onClick={() => handleDelete(contact.id)}>Delete</button>
                        <Link to={`/edit/${contact.id}`}>
                            <button>Edit</button> {/* Кнопка редактирования */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;