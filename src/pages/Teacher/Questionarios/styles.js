import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Rubik", sans-serif;
  width: 100%;
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
`;

export const LinkQuiz = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #e3e3e3;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 0.01em 0.1em #3f3f3f;
  text-decoration: none;
  color: #000;

  li {
    width: 100%;
    font-size: 18px;
  }

  &:hover {
    background-color: #979494;
  }
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
