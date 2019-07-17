import styled from "styled-components";
import { Person } from "styled-icons/material/Person";

export const IconPerson = styled(Person)`
  height: 30px;
  color: #4a4a4a;
  margin-left: 5px;
`;

export const BotaoCadastrar = styled.button`
  background-color: #059451;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  margin-top: 10px;
  width: 36%;
  color: #f1f1f1;
  font-size: 24px;
  font-family: "Rubik", sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
