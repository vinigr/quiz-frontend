import styled from "styled-components";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

export const Title = styled.h2`
  font-size: 30px;
  font-family: "Rubik", sans-serif;
  margin-top: 5px;
`;

export const DivQuestions = styled.div`
  width: 80%;
`;

export const DivOptions = styled.div`
  width: 80%;
`;

export const DivOption = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: ${props =>
    props.answer === props.position ? "#37996b" : "#DDDDDD"};

  p {
    font-weight: 400;
  }
`;

export const DivAnswer = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: ${props => (props.answer ? "#37996b" : "#CF4848")};
  width: 100px;
  display: flex;
  justify-content: center;
  p {
    font-weight: 500;
    color: #fff;
    text-align: center;
  }
`;

export const Dates = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: #4d4d4d;
    font-size: 10px;
  }

  div:last-child {
    span {
      text-align: end;
    }
  }
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

export const IconArrow = styled(KeyboardArrowDown)`
  color: #b7b7b7;
  width: 24px;
`;

export const Editar = styled(Link)`
  display: flex;
  height: 40px;
  border: none;
  align-self: flex-end;
  width: 80px;
  background-color: #95c2e3;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 2px;

  &:hover {
    opacity: 0.8;
  }
`;
