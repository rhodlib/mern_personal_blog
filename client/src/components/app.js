import { h } from "preact";
import { Router } from "preact-router";

import Layout from "./layout";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Login from "../routes/login";

const App = () => (
    <div id="app">
      <Layout>
        <Router>
          <Home exact path="/" />
          <Login path="/profile/"/>
        </Router>
	  </Layout>
    </div>
);

export default App;
