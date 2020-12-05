import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";

import reducer from "./reducers";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/Post";
import Timeline from "./components/Timeline";

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/timeline" component={Timeline} />
          <Route path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
