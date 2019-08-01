import styled from "styled-components";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: "Rubik", sans-serif;
  margin-top: 5px;
`;

export const DivQuestions = styled.div`
  width: 80%;
`;

export const DivImage = styled.div`
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 20px;
  cursor: pointer;
  width: 60%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Add = styled(Link)`
  padding: 10px;
  width: 6em;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  text-align: center;
  font-family: "Rubik", sans-serif;
`;

export const IconArrow = styled(KeyboardArrowDown)`
  color: #b7b7b7;
  width: 24px;
`;
