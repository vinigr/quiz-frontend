import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../../utils/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  h2 {
    font-size: 16px;
    margin-bottom: 6px;
  }

  ul {
    list-style: none;
    width: 70%;
    display: flex;
    flex-direction: column;

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
  }
`;

export const Add = styled(Link)`
  padding: 10px;
  width: 6em;
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  background-color: #5f5f5f;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
`;
