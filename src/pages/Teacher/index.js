import React from "react";
import { Container, Main } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import Home from "./Home";
import Disciplinas from "./Disciplinas";
import Disciplina from "./Disciplina";
import Questoes from "./Questoes";
import NovaQuestao from "./NovaQuestao";
import Questionarios from "./Questionarios";
import Quiz from "./Disciplina/Questionarios/Quiz";
import { Switch, Route } from "react-router-dom";

export default function Teacher(props) {
  return (
    <Container>
      <HeaderMenu {...props} />
      <Main>
        <Switch>
          <Route exact path={`${props.match.path}/`} component={Home} />
          <Route exact path={`${props.match.path}/d`} component={Disciplinas} />
          <Route path={`${props.match.path}/d/:id`} component={Disciplina} />
          <Route exact path={`${props.match.path}/qt`} component={Questoes} />
          <Route path={`${props.match.path}/qt/new`} component={NovaQuestao} />
          <Route
            exact
            path={`${props.match.path}/q`}
            component={Questionarios}
          />
          <Route path={`${props.match.path}/q/:id`} component={Quiz} />
        </Switch>
      </Main>
    </Container>
  );
}
