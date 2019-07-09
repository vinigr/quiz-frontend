import React from "react";
import { Switch, Route } from "react-router-dom";
import Pessoas from "./Pessoas";
import Mural from "./Mural";
import { Container } from "./styles";

export default function Disciplina(props) {
  return (
    <Container>
      <Switch>
        <Route exact path={`${props.match.path}/`} component={Mural} />
        <Route path={`${props.match.path}/p`} component={Pessoas} />
      </Switch>
    </Container>
  );
}
