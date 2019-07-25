import styled from "styled-components";
import { Person } from "styled-icons/material/Person";

export const IconPerson = styled(Person)`
  height: 30px;
  color: #4a4a4a;
  margin-left: 5px;
`;

export const TextUser = styled.h4`
  font-size: 16px;
  font-weight: 300;
  margin: 5px 0;
`;

export const InputUser = styled.input``;

export const LabelUser = styled.label`
  padding: 12px;
  border-radius: 5px;
  font-weight: 500;
`;

export const TypeUser = styled.div`
  padding: 1.5em;

  & ${InputUser}:checked + ${LabelUser} {
    background-color: #37996b;
    color: #fff;
  }
`;

export const BotaoCadastrar = styled.button`
  background-color: #059451;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  margin-top: 10px;
  width: 140px;
  color: #f1f1f1;
  font-size: 24px;
  font-family: "Rubik", sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
