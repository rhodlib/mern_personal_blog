import React from 'react';
import Style from "./NewArticle.module.css";

const NewArticle = () => (
    <form className={Style.form}>
        <input placeholder="Url image layout"/>
        <input placeholder="Title"/>
        <input placeholder="Description"/>
        <textarea placeholder="Markdown here"/>
        <button type="submit">Post</button>
    </form>
);

export default NewArticle;