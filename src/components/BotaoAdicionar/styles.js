import styled from "styled-components";
import { Plus } from "styled-icons/boxicons-regular/Plus";

export const Button = styled.button`
  background-color: #000;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  position: fixed;
  bottom: 30px;
  right: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled(Plus)`
  color: #fff;
  height: 40px;
`;
