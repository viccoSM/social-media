import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/organism/Header";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import Album from "./components/pages/Album";
import Photos from "./components/pages/Photos";

import "./assets/style.scss";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Users} />
        <Route exact path="/user/:id/posts" component={Posts} />
        <Route exact path="/user/:id/album" component={Album} />
        <Route exact path="/user/:id/album/:id" component={Photos} />
      </Router>
    </Provider>
  );
}

export default App;
