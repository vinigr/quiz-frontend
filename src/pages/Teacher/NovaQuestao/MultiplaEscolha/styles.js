import styled from "styled-components";
import { ImageAdd } from "styled-icons/boxicons-regular/ImageAdd";

export const Container = styled.div``;

export const DivUpload = styled.div`
  border-radius: 4px;
  padding: 30px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 50px;
  cursor: pointer;
`;

export const IconImage = styled(ImageAdd)`
  color: #999;
  height: 60px;
`;

export const ButtonCreate = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
`;
