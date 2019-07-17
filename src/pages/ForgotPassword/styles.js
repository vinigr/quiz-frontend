import styled from "styled-components";

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
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #059451;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextSuccess = styled.h4`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #4bb543;
  margin-top: 20px;
`;
