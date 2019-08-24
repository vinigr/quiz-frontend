import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  div.quiz-info {
    width: calc(80vw - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Rubik", sans-serif;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  div.questions {
    width: 80vw;
  }

  div.hits {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
