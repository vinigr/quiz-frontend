import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  nav {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    font-family: "Open Sans";
  }
`;

export const OpcaoQuestao = styled(NavLink)`
  padding: 16px;
  height: 100%;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 2px;

  &:hover {
    background-color: #dbdbdb;
  }

  &[aria-current] {
    background-color: #8ebe91;
    border-bottom: 3px solid #015407;
  }
`;
