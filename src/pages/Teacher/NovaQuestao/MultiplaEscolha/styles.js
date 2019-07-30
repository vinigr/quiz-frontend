import styled from "styled-components";
import { ImageAdd } from "styled-icons/boxicons-regular/ImageAdd";
import { CheckCircle } from "styled-icons/boxicons-solid/CheckCircle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const DivUpload = styled.div`
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 50px;
  cursor: pointer;
  width: 60%;
  margin-bottom: 20px;
`;

export const IconImage = styled(ImageAdd)`
  color: #999;
  height: 60px;
`;

export const InputRadio = styled.input`
  background-position: 0 -30px;
`;

export const LabelOption = styled.label`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  justify-content: space-around;
  border-radius: 5px;
`;

export const IconVerified = styled(CheckCircle)`
  color: #fff;
  height: 60px;
`;

export const DivOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const DivOption = styled.div`
  & ${InputRadio}:checked + ${LabelOption} {
    background-color: #37996b;
  }
`;

export const AreaOption = styled.textarea`
  resize: none;
  width: 80%;
  border-radius: 2px;
  background-color: #f2f7ef;
  padding: 5px;
`;

export const ButtonCreate = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
`;
