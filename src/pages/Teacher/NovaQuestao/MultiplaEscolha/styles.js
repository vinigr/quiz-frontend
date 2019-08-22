import styled from "styled-components";
import { ImageAdd } from "styled-icons/boxicons-regular/ImageAdd";
import { CheckCircle } from "styled-icons/boxicons-solid/CheckCircle";
import { Close } from "styled-icons/material/Close";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-top: 50px;
  font-family: "Rubik", sans-serif;
`;

export const DivUpload = styled.div`
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 20px;
  cursor: pointer;
  width: 60%;
  margin-bottom: 20px;
`;

export const DivImage = styled.div`
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 20px;
  width: 60%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const IconClose = styled(Close)`
  color: #999;
  height: 30px;
  cursor: pointer;
`;

export const AreaPergunta = styled.textarea`
  resize: none;
  width: 70%;
  border-radius: 4px;
  background-color: #f8f8f8;
  padding: 5px;
  box-shadow: 0 0.01em 0 #9f9f9f;
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
  border-radius: 4px;
  cursor: pointer;
  background-color: #e0e0e0;
  margin-bottom: 5px;
`;

export const IconVerified = styled(CheckCircle)`
  color: #fff;
  height: 60px;
`;

export const DivOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 24px;
`;

export const DivOption = styled.div`
  & ${InputRadio}:checked + ${LabelOption} {
    background-color: #37996b;
  }
`;

export const AreaOption = styled.textarea`
  resize: none;
  width: 80%;
  border-radius: 4px;
  background-color: #f4f4f4;
  padding: 5px;

  & :focus {
    border: 3px solid #555;
  }
`;

export const AreaExplication = styled.textarea`
  resize: none;
  width: 56%;
  border-radius: 4px;
  background-color: #f8f8f8;
  padding: 5px;
  box-shadow: 0 0.01em 0 #9f9f9f;
  height: 60px;
  margin-bottom: 20px;
`;

export const TextError = styled.h4`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #d41919;
  margin: 0 0 10px;
`;

export const ButtonCreate = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
`;
