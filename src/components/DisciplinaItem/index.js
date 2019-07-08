import React from "react";
import {
  LinkDisciplina,
  DisciplinaLi,
  Div,
  DivTop,
  DivTitle,
  DivDots,
  DotsIcon,
  DivBottom,
  NomeDisciplina,
  Descricao,
  Codigo
} from "./styles";

const DisciplinaItem = subject => (
  <LinkDisciplina to={`/teacher/disciplina/${subject.id}`} key={subject.id}>
    <DisciplinaLi>
      <Div>
        <DivTop>
          <DivTitle>
            <NomeDisciplina>{subject.name}</NomeDisciplina>
            <Descricao>{subject.topic}</Descricao>
          </DivTitle>
          <DivDots
            onClick={e => {
              e.preventDefault();
              console.log();
            }}
          >
            <DotsIcon />
          </DivDots>
        </DivTop>
        <DivBottom>
          <Codigo>Código: {subject.accessCode}</Codigo>
        </DivBottom>
      </Div>
    </DisciplinaLi>
  </LinkDisciplina>
);

export default DisciplinaItem;
