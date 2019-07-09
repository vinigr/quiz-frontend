import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Login, Register, Player, Teacher } from "./pages";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/p" component={Player} />
      <Route path="/t" component={Teacher} />
    </Switch>
  </BrowserRouter>
);

export default App;
