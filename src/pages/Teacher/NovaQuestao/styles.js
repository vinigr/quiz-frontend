import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormatListNumbered } from "styled-icons/material/FormatListNumbered";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  select {
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    padding: 5px;
    border: solid 1px #e0e0e0;

    appearance: none;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: "Open Sans", sans-serif;
`;

export const DivOptions = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 60%;
  }
`;

export const Option = styled(NavLink)`
  text-decoration: none;
  margin: 0 10px;
  border-radius: 5px;

  &[aria-current] {
    border: 0.15em solid #015407;
  }

  @media (max-width: 425px) {
    margin: 10px 0;
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
  font-family: "Open Sans", sans-serif;
  margin: 0;
  color: #343434;
  font-size: 16px;
  text-align: center;
`;

export const ImgTrueFalse = styled.img`
  height: 60%;
`;

export const IconListNumbered = styled(FormatListNumbered)`
  height: 60%;
`;
