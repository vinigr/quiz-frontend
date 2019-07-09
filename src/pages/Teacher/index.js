import React, { useState } from "react";
import { Container, Main, Content } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import SideMenu from "../../components/SideMenu";
import Home from "./Home";
import Disciplinas from "./Disciplinas";
import Disciplina from "./Disciplina";
import { Switch, Route } from "react-router-dom";

export default function Teacher(props) {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <Container>
      <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <Content sideMenu={sideMenu}>
        <HeaderMenu {...props} sideMenu={sideMenu} setSideMenu={setSideMenu} />
        <Main>
          <Switch>
            <Route exact path={`${props.match.path}/`} component={Home} />
            <Route
              exact
              path={`${props.match.path}/d`}
              component={Disciplinas}
            />
            <Route path={`${props.match.path}/d/:id`} component={Disciplina} />
          </Switch>
        </Main>
      </Content>
    </Container>
  );
}
