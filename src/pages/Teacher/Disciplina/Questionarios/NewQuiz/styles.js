import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  button.expiration {
    margin-bottom: 10px;
  }

  div.select {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    div.feedback {
      display: flex;
      align-items: flex-end;
    }
  }

  select {
    height: 40px;
    border-radius: 4px;
    margin-top: 5px;
    padding: 5px;
  }

  input {
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    width: 400px;
    padding: 0 5px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 14px;
  }

  h4 {
    margin: 10px 0;
  }

  span.details {
    font-weight: 500;
    color: #616a6b;
    margin: 5px 0;
  }

  h4.error {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #d41919;
    margin: 10px 0 6px;
  }

  button {
    padding: 10px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  button.register {
    margin-top: 20px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export const DivQuestions = styled.div`
  width: 80%;

  .button {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  button {
    width: 80px;
    height: 50px;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
  }

  button.add {
    background-color: #37996b;
  }

  button.remove {
    background-color: #cf4848;
  }
`;

export const DivOptions = styled.div`
  width: 80%;
`;

export const DivOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  background-color: ${props =>
    props.answer === props.position ? "#8CD5B3" : "#DDDDDD"};

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h4 {
      font-family: "Open Sans";
      font-weight: 500;
    }
  }

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
  margin: 20px 0 20px;

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
