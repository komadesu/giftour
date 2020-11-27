import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
