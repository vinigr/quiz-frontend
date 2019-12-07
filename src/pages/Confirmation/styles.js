import styled from "styled-components";

export const Container = styled.section`
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;

  h2 {
    margin-bottom: 14px;
    font-size: 30px;
  }

  h2#erro {
    color: #d41919;
  }

  p {
    text-align: center;
    margin-bottom: 16px;
  }

  img {
    width: 100px;
  }

  a#button {
    font-size: 16px;
    font-weight: 500;
    border-radius: 20px;
    padding: 18px;
    color: #000;
    border: solid 0.05em #059451;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      opacity: 0.8;
      background-color: #fff;
    }
  }
`;
