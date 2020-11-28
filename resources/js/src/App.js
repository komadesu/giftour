import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import BgTemplate from "./components/BgTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
      </Switch>
      <BgTemplate />
    </BrowserRouter>
  );
};

export default App;
