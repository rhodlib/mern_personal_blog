import React, { useState } from 'react';
import axios from "axios";
import Style from "./NewArticle.module.css";
import { useHistory } from "react-router-dom";

const NewArticle = () => {
    let history = useHistory();
    const [article, setArticle] = useState({
        image: "",
        title: "",
        description: "",
        markdown: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setArticle({...article, [name]: value })
    };


    const onSubmit = async(event) => {
        event.preventDefault();
        const { image, title, description, markdown } = article;
        const post = {image, title, description, markdown};

        if(sessionStorage.token){
            axios.defaults.headers.common['Authorization'] = sessionStorage.token;
            await axios.post("http://localhost:4000/api/new/post", post);
            history.push("/");
        }
    }

    return(
        <form className={Style.form} onSubmit={onSubmit}>
            <input type="text" required placeholder="Url image layout" name="image" value={article.image} onChange={handleInputChange}/>
            <input type="text" required placeholder="Title" name="title" value={article.title} onChange={handleInputChange}/>
            <input type="text" required placeholder="Description" name="description" value={article.description} onChange={handleInputChange}/>
            <textarea required placeholder="Markdown here" name="markdown" value={article.markdown} onChange={handleInputChange}/>
            <button type="submit">Post</button>
        </form>
    );
};

export default NewArticle;