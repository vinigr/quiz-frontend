import styled from "styled-components";
import { device } from "../../../../../../utils/devices";

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
    font-family: "Open Sans", sans-serif;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
    }
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

  div.questions {
    width: 80vw;

    h5 {
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
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
