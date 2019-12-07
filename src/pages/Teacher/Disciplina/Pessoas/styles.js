import styled from "styled-components";
import { device } from "../../../../utils/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ListPessoas = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  width: 70%;

  @media (max-width: ${device.laptop}) {
    width: 80%;
  }

  @media (max-width: 680px) {
    width: 90%;
  }

  @media (max-width: ${device.mobileL}) {
    width: 95%;
  }

  @media (max-width: ${device.mobileM}) {
    width: 98%;
  }
`;

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin: 0 0 16px;
`;
