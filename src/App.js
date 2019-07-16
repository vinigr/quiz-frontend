import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Login, Register, Player, Teacher } from "./pages";
import AuthService from "./service/auth";

const PlayerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    x
    render={props =>
      AuthService.loggedIn() && AuthService.getRole() === 1 ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    x
    render={props =>
      AuthService.loggedIn() && AuthService.getRole() === 2 ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PlayerRoute path="/p" component={props => <Player {...props} />} />
      <TeacherRoute path="/t" component={props => <Teacher {...props} />} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default App;
