import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Google } from "styled-icons/fa-brands/Google";
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
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
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

export const Input = styled.input`
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 4px 6px;
  width: 80%;
  margin-bottom: 14px;
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
`;

export const DivInfo = styled.div`
  background-color: #059451;
  height: calc(100vh - ${Header});
  width: 40vw;
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
  font-weight: 400;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  border: solid 1px #fff;
  text-decoration: none;
  text-transform: uppercase;
`;
