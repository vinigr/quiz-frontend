import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: "Rubik", sans-serif;
  margin-top: 5px;
`;

export const DivOptions = styled.div`
  display: flex;
`;

export const Option = styled(NavLink)`
  text-decoration: none;
  margin: 0 10px;
  border-radius: 5px;

  &[aria-current] {
    border: 0.15em solid #015407;
  }
`;

export const OptionDiv = styled.div`
  background-color: #e5e5e5;
  height: 80px;
  border-radius: 5px;
  min-width: 120px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-around;

  &:hover {
    opacity: 0.8;
  }
`;

export const OptionText = styled.h3`
  font-family: "Rubik", sans-serif;
  margin: 0;
  color: #343434;
  font-size: 16px;
`;

export const ImgTrueFalse = styled.img`
  height: 60%;
`;
