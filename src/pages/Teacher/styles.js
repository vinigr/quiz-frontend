import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.sideMenu ? "84%" : "94%")};
`;
