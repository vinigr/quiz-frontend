import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Container,
  Title,
  DivOptions,
  Option,
  OptionDiv,
  OptionText,
  ImgTrueFalse
} from "./styles";

import trueOrFalse from "../../../assets/img/true-or-false.png";

export default function NovaQuestao(props) {
  return (
    <Container>
      {console.log(props)}
      <Title>Nova Questão</Title>
      <DivOptions>
        <Option exact to={`${props.match.path}`}>
          <OptionDiv>
            <OptionText>Múltipla escolha</OptionText>
          </OptionDiv>
        </Option>
        <Option to={`${props.match.path}/tf`}>
          <OptionDiv>
            <OptionText>Verdadeiro ou falso</OptionText>
            <ImgTrueFalse src={trueOrFalse} />
          </OptionDiv>
        </Option>
      </DivOptions>
      <Switch>
        <Route
          exact
          path={`${props.match.path}/`}
          component={() => <h2>Multipla</h2>}
        />
        <Route
          exact
          path={`${props.match.path}/tf`}
          component={() => <h2>T or f</h2>}
        />
      </Switch>
    </Container>
  );
}
