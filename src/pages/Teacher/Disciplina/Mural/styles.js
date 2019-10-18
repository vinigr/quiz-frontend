import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Rubik", sans-serif;
  flex-wrap: wrap;
  justify-content: center;

  .graphics {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;
