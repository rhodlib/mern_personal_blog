import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import axios from "axios";
import Blogheader from "../../components/Blogheader";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get("http://localhost:4000/api/post");
    setPosts(resp.data.reverse());
  };

  const renderPost = () => {
    if (posts) {
      return posts.map((post) => (
        <Link key={post._id} className={Style.LinkHome} to={`/article/${post._id}`}>
          <Blogheader
            image={post.image}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
          />
        </Link>
      ));
    }
  };

  return <div className={Style.home}>{renderPost()}</div>;
};

export default Home;
