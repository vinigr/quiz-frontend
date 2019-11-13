import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  font-family: "Rubik", sans-serif;
  background-color: #059451;

  header {
    display: flex;
    justify-content: flex-end;
    height: 40px;
    width: calc(100% - 40px);
    padding: 10px 20px;
    align-items: center;
  }

  a {
    margin: 0 10px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }

  section#presentation {
    display: flex;
    align-items: center;

    @media (max-width: 560px) {
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 70px;
      color: #fff;

      @media (max-width: 700px) {
        font-size: 60px;
      }
    }

    h3 {
      font-size: 16px;
      color: #fff;

      @media (max-width: 560px) {
        text-align: center;
      }
    }
  }
`;

export const ImgSmart = styled.img`
  width: 35%;

  @media (max-width: 1080px) {
    width: 40%;
  }

  @media (max-width: 860px) {
    width: 50%;
  }

  @media (max-width: 560px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }

  @media (max-width: 340px) {
    width: 90%;
  }
`;
