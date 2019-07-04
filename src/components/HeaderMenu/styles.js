import styled from "styled-components";
import { NotificationsNone } from "styled-icons/material/NotificationsNone";

export const Header = styled.header`
  height: 60px;
  background-color: #fff;
  /* width: 76%; */
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconNotificacoes = styled(NotificationsNone)`
  color: #000;
  height: 30px;
`;
