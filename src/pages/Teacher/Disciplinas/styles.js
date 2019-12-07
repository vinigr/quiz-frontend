import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  width: calc(100vw - 20px);
`;

export const ListaDisciplinas = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleForm = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  width: calc(100% - 10px);
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
