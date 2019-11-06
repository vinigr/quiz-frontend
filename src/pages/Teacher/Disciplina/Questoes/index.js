import React from "react";
import { Route, Switch } from "react-router-dom";

import { Container, OpcaoQuestao } from "./styles";

import Lista from "./Lista/Lista";
import AddQuestao from "./AddQuestao/AddQuestao";

export default function Questoes(props) {
  return (
    <Container>
      <nav>
        <OpcaoQuestao exact to={`${props.match.url}`}>
          Lista
        </OpcaoQuestao>
        <OpcaoQuestao exact to={`${props.match.url}/add`}>
          Adicionar
        </OpcaoQuestao>
      </nav>
      <Switch>
        <Route exact path={`${props.match.path}`} component={Lista} />
        <Route path={`${props.match.path}/add`} component={AddQuestao} />
      </Switch>
    </Container>
  );
}
