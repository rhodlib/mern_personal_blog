import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./NewArticle.module.css";
import { useHistory, useParams } from "react-router-dom";

const NewArticle = () => {
  let history = useHistory();
  let { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [article, setArticle] = useState({
    image: "",
    title: "",
    description: "",
    markdown: "",
  });

  useEffect(() => {
    if (id) {
      getArticleById(id);
      setEditing(true);
    }
  }, [id]);

  const getArticleById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/post/${id}`);
      setArticle(res.data);
    } catch (err) {
      console.log({ error: err });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (sessionStorage.token) {
      if (editing) {
        try {
          axios.defaults.headers.common["Authorization"] = sessionStorage.token;
          await axios.put(`http://localhost:4000/api/update/${id}`, article);
          history.push(`/article/${id}`);
        } catch (err) {
          console.log({ error: err });
        }
      } else {
        try {
          axios.defaults.headers.common["Authorization"] = sessionStorage.token;
          await axios.post("http://localhost:4000/api/new/post", article);
          history.push("/");
        } catch (err) {
          console.log({ error: err });
        }
      }
    }
  };

  return (
    <form className={Style.form} onSubmit={onSubmit}>
      <input
        type="text"
        required
        placeholder="Url image layout"
        name="image"
        value={article.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        required
        placeholder="Title"
        name="title"
        value={article.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        required
        placeholder="Description"
        name="description"
        value={article.description}
        onChange={handleInputChange}
      />
      <textarea
        required
        placeholder="Markdown here"
        name="markdown"
        value={article.markdown}
        onChange={handleInputChange}
      />
      <div>
        <button onClick={() => history.goBack()}>Back</button>
        <button type="submit">{editing ? "Edit" : "Create"}</button>
      </div>
    </form>
  );
};

export default NewArticle;
