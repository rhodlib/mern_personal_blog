import { h } from "preact";
import Style from "./style.css";

const CreateArticle = () => (
    <form className={Style.form}>
        <input placeholder="Url image layout"/>
        <input placeholder="Title"/>
        <input placeholder="Description"/>
        <textarea placeholder="Markdown here"/>
        <button type="submit">Post</button>
    </form>
);

export default CreateArticle;