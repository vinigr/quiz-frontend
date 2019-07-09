import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NotificationsNone } from "styled-icons/material/NotificationsNone";
import { Menu } from "styled-icons/material/Menu";

export const Header = styled.header`
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = `
  cursor: pointer;

  &:hover {
    color: #118d19;
  }
`;

export const IconNotificacoes = styled(NotificationsNone)`
  color: #000;
  height: 30px;

  ${Icon};
`;

export const OpcoesDisciplina = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const OpcaoDisciplina = styled(NavLink)`
  padding: 0 16px;
  height: 100%;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #dbdbdb;
  }

  &[aria-current] {
    background-color: #8ebe91;
    border-bottom: 3px solid #015407;
  }
`;

export const NomeOpcao = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export const IconMenu = styled(Menu)`
  color: #000;
  height: 30px;

  ${Icon};
`;
