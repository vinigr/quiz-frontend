import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-family: "Open Sans";
    margin-bottom: 10px;
  }

  button#real-time {
    border-radius: 2px;
    border: none;
    padding: 6px;
    margin-bottom: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  div.hits {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
