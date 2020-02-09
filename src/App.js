import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/home";

function App() {
  const AppRoutes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );

  return AppRoutes;
}

export default App;
