import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: 80px;
  background-color: #d9d8d8;
  border-radius: 4px;
  padding: 10px 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Rubik", sans-serif;
  border: 2px solid #02630c;

  h3 {
    color: #000;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  div#dispute {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h4 {
      color: #000;
      font-family: "Rubik", sans-serif;
      margin-bottom: 4px;
    }
  }

  button {
    padding: 6px;
    border: none;
    border-radius: 2px;
    width: 120px;
    margin: 10px 0;

    &:hover {
      cursor: pointer;
    }
  }
`;
