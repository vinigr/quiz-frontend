import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Rubik", sans-serif;

  h2 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
  }

  button {
    border: none;
    padding: 6px;
    cursor: pointer;
  }
`;
