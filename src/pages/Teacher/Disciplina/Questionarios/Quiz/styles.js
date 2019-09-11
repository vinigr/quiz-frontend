import styled from "styled-components";
import { device } from "../../../../../utils/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

    h5 {
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      margin-top: 10px;
      font-size: 16px;
    }

    @media (max-width: ${device.mobileL}) {
      width: 90vw;
    }
  }

  div.hits {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
