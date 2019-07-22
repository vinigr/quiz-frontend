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

const DisciplinaItem = ({ subject, handleClick }) => {
  return (
    <LinkDisciplina to={`/t/d/${subject.id}`}>
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
              }}
            >
              <DotsIcon onClick={handleClick} />
            </DivDots>
          </DivTop>
          <DivBottom>
            <Codigo>Código: {subject.accessCode}</Codigo>
          </DivBottom>
        </Div>
      </DisciplinaLi>
    </LinkDisciplina>
  );
};

export default DisciplinaItem;
