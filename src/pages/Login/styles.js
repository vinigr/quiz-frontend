import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Google } from "styled-icons/fa-brands/Google";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Rubik", sans-serif;
`;

export const SectionForm = styled.section`
  width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const DivIcons = styled.div`
  display: flex;
`;

export const ButtonSocial = styled.button`
  border-radius: 50px;
  border: 0.05em solid #8d8d8d;
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 60px;
  width: 60px;
  justify-content: center;
  margin: 0 10px;
`;

export const IconFacebook = styled(FacebookF)`
  height: 30px;
  color: #000;
`;

export const IconGoogle = styled(Google)`
  height: 30px;
  color: #000;
`;

export const TextForm = styled.h4`
  font-size: 16px;
  font-weight: 300;
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #e5e5e5;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  width: 60%;
`;
