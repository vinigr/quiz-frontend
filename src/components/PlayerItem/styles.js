import styled from "styled-components";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #e3e3e3;
  border-radius: 6px;
  align-items: center;
`;

export const Nome = styled.h3`
  font-family: sans-serif;
  font-weight: 400;
  margin: 2px 0;
`;

export const DotsIcon = styled(DotsVerticalRounded)`
  height: 24px;
  width: 24px;
`;
