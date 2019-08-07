import styled from "styled-components";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #e3e3e3;
  border-radius: 6px;
  align-items: center;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Nome = styled.h3`
  font-family: sans-serif;
  font-weight: 400;
  margin: 2px 0;
`;

export const ImageProfile = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const DotsIcon = styled(DotsVerticalRounded)`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
