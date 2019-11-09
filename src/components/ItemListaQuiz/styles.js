import styled from "styled-components";
import { Link } from "react-router-dom";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 2px;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 0.01em 0.1em #3f3f3f;

  div#last-items {
    display: flex;
    align-items: center;
    padding: 16px 16px 16px 10px;
  }

  &:hover {
    box-shadow: 0px 5px 13px 0px rgba(168, 165, 165, 0.79);
  }

  h3#code {
    font-size: 14px;
    margin-left: 20px;
  }
`;

export const LinkQuiz = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #000;
  height: 100%;
  font-size: 18px;
  padding: 32px 0 32px 16px;
  border-right: solid 1px #e9e9e9;

  #name {
    width: 100%;
    height: 100%;
  }
`;
