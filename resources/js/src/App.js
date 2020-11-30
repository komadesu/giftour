import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/post" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
