import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Rubik", sans-serif;

  h2 {
    font-size: 24px;
  }

  input[type="text"] {
    height: 40px;
    border: none;
    border-radius: 3px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    width: 400px;
    padding: 0 5px;
  }
`;
