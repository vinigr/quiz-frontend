import React from "react";
import { Container, Main } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import SideMenu from "../../components/SideMenu";
import Home from "./Home";
import Disciplinas from "./Disciplinas";
import { Switch, Route } from "react-router-dom";

export default function Teacher(props) {
  console.log(props);
  return (
    <Container>
      <SideMenu />
      <div style={{ display: "flex", flexDirection: "column", width: "76%" }}>
        <HeaderMenu />
        <Main>
          <Switch>
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route
              exact
              path={`${props.match.path}/disciplinas`}
              component={Disciplinas}
            />
          </Switch>
        </Main>
      </div>
    </Container>
  );
}
