import React, { useEffect, useState } from "react";
import Style from "./Home.module.css";
import axios from "axios";
import Blogheader from "../../components/Blogheader";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:4000/api/post");
      setPosts(resp.data.reverse());
    } catch (err) {
      console.log({ error: err });
    }
  };

  const renderPost = () => {
    if (posts) {
      return posts.map((post) => (
        <button
          key={post._id}
          className={Style.button}
          onClick={() => history.push(`/article/${post._id}`)}
        >
          <Blogheader
            image={post.image}
            title={post.title}
            description={post.description}
            createdAt={post.createdAt}
          />
        </button>
      ));
    }
  };

  return <div className={Style.home}>{renderPost()}</div>;
};

export default Home;
