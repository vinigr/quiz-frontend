import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Notifications } from "styled-icons/material/Notifications";
import { Menu } from "styled-icons/material/Menu";
import { ExitToApp } from "styled-icons/material/ExitToApp";
import Badge from "@material-ui/core/Badge";

export const Header = styled.header`
  height: 60px;
  background-color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 0.05em #e8e8e8;
  position: fixed;
  width: calc(100vw - 40px);
  z-index: 5;
`;

const Icon = `
  cursor: pointer;.
  color: #555555;
  height: 30px;

  &:hover {
    color: #118d19;
  }
`;

export const DivLogoMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const AppLogo = styled.img`
  height: 40px;
  width: 40px;
`;

export const IconNotificacoes = styled(Notifications)`
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

  @media (max-width: 460px) {
    display: none;
  }
`;

export const NomeOpcao = styled.h2`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export const IconMenu = styled(Menu)`
  ${Icon};
`;

export const IconExit = styled(ExitToApp)`
  ${Icon};
`;

export const IconsFinal = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BadgeIcon = styled(Badge)`
  margin-right: 10px;
`;
