import React, { useContext } from "react";
import { Route, Switch, Redirect, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Article from "./routes/Article";
import NewArticle from "./routes/NewArticle";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(30%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: {
      opacity: 0,
      transform: "translate(-70%, 0)",
      position: "absolute",
    },
  });

  return (
    <div id="App">
      <Layout>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route strict exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route path="/article/:slug" component={Article}/>
              <Route path="/edit/:slug" component={NewArticle}/>
              <Route path="/new/article" component={NewArticle}/>
              <Redirect to="/" />
            </Switch>
          </animated.div>
        ))}
      </Layout>
    </div>
  );
};

export default App;
