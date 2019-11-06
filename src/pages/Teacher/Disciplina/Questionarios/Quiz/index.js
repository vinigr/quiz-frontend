import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container, OpcaoQuiz } from "./styles";

import Estatisticas from "./Estatisticas/Estatisticas";
import RealTime from "./RealTime/RealTime";

export default function Quiz(props) {
  return (
    <Container>
      <nav>
        <OpcaoQuiz
          exact
          to={{
            pathname: `${props.match.url}`,
            state: { quiz: props.location.state.quiz }
          }}
        >
          Estatísticas
        </OpcaoQuiz>
        <OpcaoQuiz
          exact
          to={{
            pathname: `${props.match.url}/rt`,
            state: { quiz: props.location.state.quiz }
          }}
        >
          Tempo Real
        </OpcaoQuiz>
      </nav>
      <Switch>
        <Route exact path={`${props.match.path}`} component={Estatisticas} />
        <Route exact path={`${props.match.path}/rt`} component={RealTime} />
      </Switch>
    </Container>
  );
}
