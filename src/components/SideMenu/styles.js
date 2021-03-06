import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Home } from "styled-icons/typicons/Home";
import { Subject } from "styled-icons/material/Subject";
import { QuestionAnswer } from "styled-icons/material/QuestionAnswer";
import { Settings } from "styled-icons/material/Settings";
import { QuestionCircle } from "styled-icons/fa-solid/QuestionCircle";
import { Info } from "styled-icons/material/Info";
import { Directions } from "styled-icons/boxicons-solid/Directions";

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: center;
  width: 100%;
  border-bottom: solid 0.05em #e8e8e8;
`;

export const AppLogo = styled.img`
  margin-left: 10px;
  height: 50px;
  width: 50px;
`;

export const NomeSite = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkMenu = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 4px 10px 4px 24px;
  margin-bottom: 8px;
  height: 40px;
  cursor: pointer;
  &:hover {
    color: #118d19;
  }

  &[aria-current] {
    color: #015407;
    background-color: #d5ece1;
    border-right: 3px solid #015407;
  }
`;

const colorIcon = `
  color: #BFBFBF;
  height: 30px;
  margin-right: 10px;

  ${LinkMenu}:hover &{
    color: #118D19;
  }

  ${LinkMenu}[aria-current] &{
    color: #015407;
  }
`;

export const IconHome = styled(Home)`
  ${colorIcon};
`;

export const IconSubject = styled(Subject)`
  ${colorIcon};
`;

export const IconQuiz = styled(QuestionAnswer)`
  ${colorIcon};
`;

export const IconQuestion = styled(QuestionCircle)`
  ${colorIcon};
`;

export const IconSettings = styled(Settings)`
  ${colorIcon};
`;

export const IconInfo = styled(Info)`
  ${colorIcon};
`;

export const IconDirections = styled(Directions)`
  ${colorIcon};
`;

export const Linha = styled.hr`
  border-width: 0;
  height: 0.5px;
  border-top-width: 0.03em;
  color: #b2babb;
  width: 100%;
  margin-bottom: 10px;
`;
