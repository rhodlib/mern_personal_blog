import { h } from "preact";
import { Router } from "preact-router";

import Layout from "./layout";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Login from "../routes/login";
import Article from "../routes/article";
import CreateArticle from "../routes/createArticle";

const App = () => (
    <div id="app">
      <Layout>
        <Router>
          <Home exact path="/" />
          <Login path="/profile/"/>
          <Article path="/article/:id"/>
          <CreateArticle path="/new/article"/>
        </Router>
	  </Layout>
    </div>
);

export default App;
