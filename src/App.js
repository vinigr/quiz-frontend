import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  Home,
  Confirmation,
  Login,
  Register,
  Player,
  Teacher,
  ForgotPassword,
  ResetPassword
} from "./pages";
import AuthService from "./service/auth";

const PlayerRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.loggedIn() && AuthService.getRole() === 1 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const TeacherRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.loggedIn() && AuthService.getRole() === 2 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AccessRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!AuthService.loggedIn()) {
        return <Component {...props} />;
      } else if (AuthService.getRole() === 1) {
        return (
          <Redirect to={{ pathname: "/p", state: { from: props.location } }} />
        );
      } else if (AuthService.getRole() === 2) {
        return (
          <Redirect to={{ pathname: "/t", state: { from: props.location } }} />
        );
      } else {
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }
    }}
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/confirmation/:token" component={Confirmation} />
      <AccessRoute path="/login" component={props => <Login {...props} />} />
      <AccessRoute
        path="/register"
        component={props => <Register {...props} />}
      />
      <AccessRoute
        path="/forgot-password"
        component={props => <ForgotPassword {...props} />}
      />
      <AccessRoute
        path="/reset-password/:token"
        component={props => <ResetPassword {...props} />}
      />
      <PlayerRoute path="/p" component={props => <Player {...props} />} />
      <TeacherRoute path="/t" component={props => <Teacher {...props} />} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
