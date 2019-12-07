import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  width: calc(100% - 40px);

  .graphics {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  #notData {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;

    img {
      margin-top: 20px;
      width: 400px;
    }
  }
`;
