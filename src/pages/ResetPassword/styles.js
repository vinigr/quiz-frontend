import styled from "styled-components";

export const DivPassword = styled.div`
  display: flex;
  background-color: #f1f1f1;
  width: 60%;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 14px;
  align-items: center;
  padding: 4px 6px;

  &:focus-within {
    border: 1px solid #151515;
  }
`;
