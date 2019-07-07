import styled from "styled-components";

export const Container = styled.div``;

export const ListaDisciplinas = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const TitleForm = styled.h2`
  font-family: "Rubik", sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-top: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  width: 400px;
  padding: 0 5px;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #b0b0b0;
  margin-bottom: 10px;
  width: 80px;
`;
