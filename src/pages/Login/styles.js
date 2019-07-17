import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Google } from "styled-icons/fa-brands/Google";
import { Email } from "styled-icons/material/Email";
import { Lock } from "styled-icons/material/Lock";
import { Eye } from "styled-icons/octicons/Eye";
import { EyeClosed } from "styled-icons/octicons/EyeClosed";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Rubik", sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  justify-content: flex-start;
  width: calc(100vw - 40px);
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
`;

export const LinkTelaInicial = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #000;
`;

export const AppLogo = styled.img`
  height: 50px;
  width: 50px;
`;

export const NomeSite = styled.h1`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: 20px;
`;

export const Conteudo = styled.main`
  display: flex;
  height: 100vh;
`;

export const SectionForm = styled.section`
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #059451;
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
  cursor: pointer;

  &:hover {
    background-color: #${props => (props.rede === "facebook" ? "3b5998" : "ea4335")};
    border: none;
  }
`;

export const IconFacebook = styled(FacebookF)`
  height: 30px;
  color: #000;

  ${ButtonSocial}:hover & {
    color: #fff;
  }
`;

export const IconGoogle = styled(Google)`
  height: 30px;
  color: #000;

  ${ButtonSocial}:hover & {
    color: #fff;
  }
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

const DivInput = `
  display: flex;
  background-color: #f1f1f1;
  width: 80%;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 14px;
  align-items: center;
  padding: 4px 6px;
`;

export const Input = styled.input`
  background-color: #f1f1f1;
  border: none;
  padding: 4px 6px;
  height: 100%;
  width: 100%;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export const DivEmail = styled.div`
  ${DivInput};

  &:focus-within {
    border: 1px solid #151515;
  }
`;

export const DivPassword = styled.div`
  ${DivInput};

  &:focus-within {
    border: 1px solid #151515;
  }
`;

const IconInput = `
  height: 30px;
  color: #4A4A4A;
  margin-left: 5px;
`;

export const IconMail = styled(Email)`
  ${IconInput};
`;

export const IconPassword = styled(Lock)`
  ${IconInput};
`;

const EyeStyle = `
  height: 20px;
  color: #4A4A4A;
  margin-right: 10px;
`;

export const IconEye = styled(Eye)`
  ${EyeStyle};
`;

export const IconEyeClosed = styled(EyeClosed)`
  ${EyeStyle};
`;

export const TextError = styled.h4`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #d41919;
  margin: 0;
`;

export const LinkRecuperacao = styled(Link)`
  font-size: 16px;
  font-weight: 600px;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #434343;
`;

export const BotaoEntrar = styled.button`
  background-color: #059451;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  width: 30%;
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
  height: calc(100vh - ${Header});
  width: 35vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const TitleInfo = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin: 0 0 5px;
`;

export const TextInfo = styled.h3`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;

export const LinkCadastro = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  border: solid 0.05em #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #059451;
    background-color: #fff;
  }
`;
