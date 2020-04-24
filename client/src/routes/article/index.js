import React from 'react';
import Style from "./Article.module.css";
import Blogheader from "../../components/Blogheader";

const Article = () => (
  <div className={Style.article}>
	  <Blogheader/>
    <p className={Style.markdown}>
      Some markdown text
    </p>
  </div>
);

export default Article;
