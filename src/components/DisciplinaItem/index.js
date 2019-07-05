import React from "react";
import {
  LinkDisciplina,
  DisciplinaLi,
  DivTop,
  DivBottom,
  NomeDisciplina,
  Descricao,
  Codigo
} from "./styles";

const DisciplinaItem = subject => (
  <LinkDisciplina to={`/teacher/disciplina/${subject.id}`} key={subject.id}>
    <DisciplinaLi>
      <DivTop>
        <div>
          <NomeDisciplina>{subject.name}</NomeDisciplina>
          <Descricao>{subject.topic}</Descricao>
        </div>
        <DivBottom>
          <Codigo>Código: {subject.accessCode}</Codigo>
        </DivBottom>
      </DivTop>
    </DisciplinaLi>
  </LinkDisciplina>
);

export default DisciplinaItem;
