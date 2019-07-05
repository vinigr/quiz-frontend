import React from "react";
import { Container, Main, Content } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import SideMenu from "../../components/SideMenu";
import Home from "./Home";
import Disciplinas from "./Disciplinas";
import { Switch, Route } from "react-router-dom";

export default function Teacher(props) {
  return (
    <Container>
      <SideMenu />
      <Content>
        <HeaderMenu />
        <Main>
          <Switch>
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route
              exact
              path={`${props.match.path}/disciplinas`}
              component={Disciplinas}
            />
          </Switch>
        </Main>
      </Content>
    </Container>
  );
}
