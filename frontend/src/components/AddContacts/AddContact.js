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
            <h2>Добавнелие контактов</h2>
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
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContact;