import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Add = styled(Link)`
  padding: 10px;
  width: 6em;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  text-align: center;
  font-family: "Rubik", sans-serif;
`;
