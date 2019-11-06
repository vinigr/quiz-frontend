import React, { useEffect } from "react";
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

import trueOrFalse from "../../../../../assets/img/true-or-false.png";

export default function AddQuestao(props) {
  useEffect(() => {
    document.title = "Nova Questão";
  }, []);

  return (
    <Container>
      <Title>Nova Questão</Title>
      <DivOptions>
        <Option exact to={`${props.match.url}`}>
          <OptionDiv>
            <OptionText>Múltipla escolha</OptionText>
            <IconListNumbered />
          </OptionDiv>
        </Option>
        <Option exact to={`${props.match.url}/tf`}>
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
          component={() => <MultiplaEscolha {...props} />}
        />
        <Route
          exact
          path={`${props.match.path}/tf`}
          component={() => <TrueOrFalse {...props} />}
        />
      </Switch>
    </Container>
  );
}
