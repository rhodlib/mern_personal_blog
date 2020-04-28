import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Style from "./Article.module.css";
import Blogheader from "../../components/Blogheader";
import ReactMarkdown from "react-markdown";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Article = () => {
  let history = useHistory();
  const [article, setArticle] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getDataById(id);
  }, [id]);

  const getDataById = async (id) => {
    const res = await axios.get(`http://localhost:4000/api/post/${id}`)
    setArticle(res.data);
  }

  const deleteArticle = async(id) => {
    if(window.confirm("Do you wanna delete this article?")){
      axios.defaults.headers.common['Authorization'] = sessionStorage.token;
      await axios.delete(`http://localhost:4000/api/delete/${id}`);
      history.push("/")
    }
  }

  const editDeleteArticle = (id) => {
    if(sessionStorage.token) {
      return (
        <div className={Style.buttons}>
          <button onClick={ () => deleteArticle(id) } className={Style.linkButton}>Delete</button>
          <button onClick={ () => history.push(`/edit/${id}`)}  className={Style.linkButton}>Edit</button>
        </div>
      );
    }
  }

  const renderMarkdown = () => {
    if(article.markdown === undefined ) {
      return <SkeletonTheme color="#161f27" highlightColor="#324759"><Skeleton count={15}/></SkeletonTheme>
    } else {
      return <ReactMarkdown className={Style.markdown} source={article.markdown}/>
    }
  }

  return (
    <div className={Style.article}>
      <div className={Style.controlHeader}>
        <Blogheader 
              image={article.image}
              title={article.title}
              description={article.description}
              createdAt={article.createdAt}
            />
        {editDeleteArticle(id)}
      </div>
      <hr/>
      {renderMarkdown()}
    </div>
  )
};

export default Article;
