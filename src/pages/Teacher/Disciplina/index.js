import React from "react";
import { Switch, Route } from "react-router-dom";
import Pessoas from "./Pessoas";
import Mural from "./Mural";
import Questionarios from "./Questionarios";
import Questoes from "./Questoes";
import { Container } from "./styles";

export default function Disciplina(props) {
  return (
    <Container>
      <Switch>
        <Route exact path={`${props.match.path}/`} component={Mural} />
        <Route path={`${props.match.path}/p`} component={Pessoas} />
        <Route path={`${props.match.path}/qt`} component={Questoes} />
        <Route path={`${props.match.path}/q`} component={Questionarios} />
      </Switch>
    </Container>
  );
}
