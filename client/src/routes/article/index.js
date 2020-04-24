import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Style from "./Article.module.css";
import Blogheader from "../../components/Blogheader";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const [article, setArticle] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getDataById(id);
  }, [id]);

  const getDataById = async (id) => {
    const res = await axios.get(`http://localhost:4000/api/post/${id}`)
    setArticle(res.data);
  }

  return (
    <div className={Style.article}>
      <Blogheader 
            image={article.image}
            title={article.title}
            description={article.description}
            createdAt={article.createdAt}
          />
      <ReactMarkdown className={Style.markdown} source={article.markdown}/>
    </div>
  )
};

export default Article;
