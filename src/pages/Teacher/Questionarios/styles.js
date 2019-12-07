import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../../utils/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  width: 100%;
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
      width: 85%;
    }

    @media (max-width: ${device.mobileL}) {
      width: 90%;
    }

    @media (max-width: ${device.mobileM}) {
      width: 95%;
    }
  }
`;

export const LinkQuiz = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 2px;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 0.01em 0.1em #3f3f3f;
  text-decoration: none;
  color: #000;

  li {
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h3:last-child {
    font-size: 14px;
  }

  &:hover {
    box-shadow: 0px 5px 13px 0px rgba(168, 165, 165, 0.79);
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
