import styled from "styled-components";
import { NotificationsNone } from "styled-icons/material/NotificationsNone";
import { Menu } from "styled-icons/material/Menu";

export const Header = styled.header`
  height: 60px;
  background-color: #fff;
  /* width: 76%; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = `
  cursor: pointer;

  &:hover {
    color: #118d19;
  }
`;

export const IconNotificacoes = styled(NotificationsNone)`
  color: #000;
  height: 30px;

  ${Icon};
`;

export const IconMenu = styled(Menu)`
  color: #000;
  height: 30px;

  ${Icon};
`;
