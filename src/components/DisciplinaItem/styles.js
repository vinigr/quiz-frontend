import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";

export const Container = styled.div``;

export const LinkDisciplina = styled(NavLink)`
  height: 150px;
  width: 18.75rem;
  background-color: #fff;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-family: "Rubik", sans-serif;
  color: #000;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 2px 0.15em #9f9f9f;
  }
`;

export const DisciplinaLi = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const hex = ((Math.random() * 0xffffff) << 0).toString(16);

function Luminosidade(hex) {
  var r, g, b, longo;
  hex = hex.replace("#", "");
  longo = hex.length > 3;

  r = longo
    ? parseInt(hex.substr(0, 2), 16)
    : parseInt(hex.substr(0, 1), 16) * 17;
  g = longo
    ? parseInt(hex.substr(2, 2), 16)
    : parseInt(hex.substr(1, 1), 16) * 17;
  b = longo
    ? parseInt(hex.substr(4, 2), 16)
    : parseInt(hex.substr(2, 1), 16) * 17;

  return (r * 299 + g * 587 + b * 114) / 1000;
}

export const Div = styled.div`
  background-color: #${hex || "11B666"};
  height: calc(100% - 10px);
  width: calc(100% -20px);
  padding: 5px 10px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${Luminosidade(hex) > 128 ? "#000" : "#fff"};
`;

export const DivTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

export const DivDots = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 10px;
  color: ${Luminosidade(hex) > 128 ? "#000" : "#fff"};
  height: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const DotsIcon = styled(DotsVerticalRounded)`
  height: 24px;
  width: 24px;
`;

export const DivBottom = styled.div``;

export const NomeDisciplina = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 2px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const Descricao = styled.p`
  font-size: 12px;
  font-weight: 450;

  ${NomeDisciplina}:hover & {
    text-decoration: underline;
  }
`;

export const Codigo = styled.h3`
  font-size: 12px;
  font-weight: 500;
  /* color: #272626; */
`;
