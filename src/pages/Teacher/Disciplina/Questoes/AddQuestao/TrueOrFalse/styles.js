import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 50px;
  font-family: "Rubik", sans-serif;
`;

export const LabelOption = styled.label`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-around;
  border-radius: 5px;
  cursor: pointer;
  background-color: #cdcdcd;
  height: 40px;
  font-weight: 500;
`;

export const DivOptions = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin-bottom: 30px;
`;

export const InputRadio = styled.input`
  padding: 10px;
  height: 25px;
`;

export const DivOption = styled.div`
  margin-right: 14px;

  &:last-child {
    margin-right: 0;
  }

  & ${InputRadio}:checked + ${LabelOption} {
    background-color: #37996b;
  }
`;
