import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import reducer from "./reducers";

import Header from "./components/Header";
import Index from "./components/Index";
import Timeline from "./components/Timeline";
import MyPage from "./components/MyPage";
import New from "./components/New";
import Update from "./components/Update";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
          <Route exact path="/" component={Index} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/new" component={New} />
          <Route path="/update" component={Update} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
