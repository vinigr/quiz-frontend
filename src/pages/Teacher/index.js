import React, { useState } from "react";
import { Container, Main, Content } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import SideMenu from "../../components/SideMenu";
import Home from "./Home";
import Disciplinas from "./Disciplinas";
import Disciplina from "./Disciplina";
import Questoes from "./Questoes";
import NovaQuestao from "./NovaQuestao";
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
            <Route exact path={`${props.match.path}/qt`} component={Questoes} />
            <Route
              path={`${props.match.path}/qt/new`}
              component={NovaQuestao}
            />
            <Route
              path={`${props.match.path}/q`}
              component={() => <h2>Questionários</h2>}
            />
          </Switch>
        </Main>
      </Content>
    </Container>
  );
}
