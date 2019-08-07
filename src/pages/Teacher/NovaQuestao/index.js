import React from "react";
import { Switch, Route } from "react-router-dom";
import MultiplaEscolha from "./MultiplaEscolha";
import TrueOrFalse from "./TrueOrFalse";

import {
  Container,
  Title,
  DivOptions,
  Option,
  OptionDiv,
  OptionText,
  ImgTrueFalse,
  IconListNumbered
} from "./styles";

import trueOrFalse from "../../../assets/img/true-or-false.png";

export default function NovaQuestao(props) {
  return (
    <Container>
      <Title>Nova Questão</Title>
      <DivOptions>
        <Option exact to={`${props.match.path}`}>
          <OptionDiv>
            <OptionText>Múltipla escolha</OptionText>
            <IconListNumbered />
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
          component={MultiplaEscolha}
        />
        <Route exact path={`${props.match.path}/tf`} component={TrueOrFalse} />
      </Switch>
    </Container>
  );
}
