import styled from "styled-components";

import { device } from "../../utils/devices";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  justify-content: flex-start;
  width: calc(100vw - 40px);
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
`;

export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;

  @media (max-width: 580px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 580px) {
    margin-top: 20vh;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #059451;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: ${device.mobileL}) {
    font-size: 26px;
  }
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${device.laptop}) {
    width: 60%;
  }

  @media (max-width: ${device.tablet}) {
    width: 70%;
  }

  @media (max-width: 580px) {
    width: 80%;
  }

  @media (max-width: ${device.mobileL}) {
    width: 100%;
  }
`;

export const DivEmail = styled.div`
  display: flex;
  background-color: #f1f1f1;
  width: 60%;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 14px;
  align-items: center;
  padding: 4px 6px;

  &:focus-within {
    border: 1px solid #151515;
  }

  @media (max-width: 580px) {
    width: 80%;
  }
`;

export const BotaoRecuperar = styled.button`
  background-color: #059451;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  width: 30%;
  color: #f1f1f1;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextSuccess = styled.h4`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #4bb543;
  margin-top: 20px;
`;
