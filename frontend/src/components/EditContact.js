import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Для получения параметров и навигации

const EditContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams(); // Получаем id контакта из URL
    const navigate = useNavigate();

    // Загружаем данные контакта для редактирования
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

    // Обработка отправки изменений
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/api/contacts/${id}`, { name, phone, email })
            .then(() => {
                alert("Contact updated successfully!");
                navigate("/"); // Перенаправляем на главную страницу после обновления
            })
            .catch((error) => {
                console.error("Error updating contact:", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Contact</h2>
            <div>
                <label>Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditContact;