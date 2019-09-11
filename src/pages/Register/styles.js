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
  cursor: pointer;
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

export const DivInfo = styled.div`
  background-color: #059451;
  height: calc(100vh - 30px);
  width: 35vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media (max-width: 580px) {
    width: calc(100% - 80px);
    height: 200px;
    padding-top: 80px;
  }
`;
