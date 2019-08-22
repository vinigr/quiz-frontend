import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Rubik", sans-serif;
  h2 {
    font-size: 16px;
    margin-bottom: 6px;
  }

  ul {
    list-style: none;
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #e3e3e3;
    border-radius: 6px;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const LinkQuiz = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: #000;
`;

export const Add = styled(Link)`
  padding: 10px;
  width: 6em;
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-family: "Rubik", sans-serif;
  background-color: #5f5f5f;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
