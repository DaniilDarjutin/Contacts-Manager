import classes from "./HomePage.module.scss"
import { useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/add");

    };
    return (
    <>
        <h1 className={classes.title}>Добро пожаловать</h1>
        <p className={classes.text1}>Вы находитесь в месте, где легко и удобно управлять своими контактами.</p>
        <p className={classes.text2}>Чтобы начать, просто нажмите на кнопку ниже и добавьте свой первый контакт.</p>
        <button className={classes.button} onClick={handleButtonClick}>Начнём</button>
    </>
    );
};

export default HomePage