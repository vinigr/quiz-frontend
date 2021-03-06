import React, { useState, useEffect } from "react";
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

import api from "../../../service/api";

export default function NovaQuestao(props) {
  const [subjects, setSubjects] = useState();
  const [subjectSelect, setSubjectSelect] = useState();

  useEffect(() => {
    async function buscaBanco() {
      const subject = await api.get("/teacher/subjects");
      await setSubjects(subject.data.subjects);
      if (props.location.state) {
        await setSubjectSelect(props.location.state.subjectId);
      }
    }

    buscaBanco();
    document.title = "Nova Questão";
  }, [props.location.state]);

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
        <Option to={`${props.match.path}/tf/new`}>
          <OptionDiv>
            <OptionText>Verdadeiro ou falso</OptionText>
            <ImgTrueFalse src={trueOrFalse} />
          </OptionDiv>
        </Option>
      </DivOptions>
      <select
        value={subjectSelect}
        onChange={e => setSubjectSelect(e.target.value)}
      >
        <option value={-1}>Selecione a disciplina</option>
        {subjects &&
          subjects.map(subject => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
      </select>
      <Switch>
        <Route
          exact
          path={`${props.match.path}/`}
          component={() => (
            <MultiplaEscolha {...props} subjectSelect={subjectSelect} />
          )}
        />
        <Route
          exact
          path={`${props.match.path}/:questionId`}
          component={() => (
            <MultiplaEscolha {...props} subjectSelect={subjectSelect} />
          )}
        />
        <Route
          exact
          path={`${props.match.path}/tf/new`}
          component={() => (
            <TrueOrFalse {...props} subjectSelect={subjectSelect} />
          )}
        />
        <Route
          exact
          path={`${props.match.path}/tf/:questionId`}
          component={() => (
            <TrueOrFalse {...props} subjectSelect={subjectSelect} />
          )}
        />
      </Switch>
    </Container>
  );
}
