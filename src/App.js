import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, Register, Dashboard } from "./pages";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default App;
