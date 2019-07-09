import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Container } from './styles';

export default function Disciplina(props) {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/m`} />
      <Route path={`${props.match.path}/p`} />
    </Switch>
  );
}
