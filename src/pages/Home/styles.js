import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Rubik", sans-serif;
  background-color: #059451;

  header {
    display: flex;
    justify-content: flex-end;
    height: 50px;
    width: calc(100% - 40px);
    padding: 10px 20px;
  }

  a {
    margin: 0 10px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
  }
`;
