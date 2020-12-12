import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import reducer from "./reducers";

import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Timeline from "./components/Timeline";
import MyPage from "./components/MyPage";
import Post from "./components/Post";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/timeline" component={Timeline} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
