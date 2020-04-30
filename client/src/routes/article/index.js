import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Style from "./Article.module.css";
import Blogheader from "../../components/Blogheader";
import ReactMarkdown from "react-markdown";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Article = () => {
  let history = useHistory();
  const [article, setArticle] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getDataBySlug(slug);
  }, [slug]);

  const getDataBySlug = async (slug) => {
    try {
      const res = await axios.get(`https://rhodlib-blog.herokuapp.com/api/post/${slug}`);
      setArticle(res.data);
    } catch (err) {
      console.log({ error: err });
    }
  };

  const deleteArticle = async (id) => {
    if (window.confirm("Do you wanna delete this article?")) {
      try {
        axios.defaults.headers.common["Authorization"] = sessionStorage.token;
        await axios.delete(`https://rhodlib-blog.herokuapp.com/api/delete/${id}`);
        history.push("/");
      } catch (err) {
        console.log({ error: err });
      }
    }
  };

  const editDeleteArticle = (id) => {
    if (sessionStorage.token) {
      return (
        <div className={Style.buttons}>
          <button
            onClick={() => deleteArticle(id)}
            className={Style.linkButton}
          >
            Delete
          </button>
          <button
            onClick={() => history.push(`/edit/${slug}`)}
            className={Style.linkButton}
          >
            Edit
          </button>
        </div>
      );
    }
  };

  const renderMarkdown = () => {
    if (article.markdown === undefined) {
      return (
        <SkeletonTheme color="#161f27" highlightColor="#324759">
          <Skeleton count={15} />
        </SkeletonTheme>
      );
    } else {
      return (
        <ReactMarkdown className={Style.markdown} source={article.markdown} />
      );
    }
  };

  return (
    <div className={Style.article}>
      <div className={Style.controlHeader}>
        <Blogheader
          image={article.image}
          title={article.title}
          description={article.description}
          createdAt={article.createdAt}
        />
        {editDeleteArticle(article._id)}
      </div>
      <hr />
      {renderMarkdown()}
    </div>
  );
};

export default Article;
