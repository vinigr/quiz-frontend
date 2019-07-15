import React, { useEffect } from "react";

import {
  Container,
  Header,
  LinkTelaInicial,
  AppLogo,
  NomeSite,
  Conteudo,
  SectionForm,
  Title,
  DivIcons,
  ButtonSocial,
  IconFacebook,
  IconGoogle,
  TextForm,
  Form,
  Input,
  LinkRecuperacao,
  BotaoEntrar,
  DivInfo,
  TitleInfo,
  TextInfo,
  LinkCadastro
} from "./styles";
import logo from "../../assets/img/logo-verde.png";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Container>
      <Header>
        <LinkTelaInicial to="/">
          <AppLogo src={logo} />
          <NomeSite>Quest On</NomeSite>
        </LinkTelaInicial>
      </Header>
      <Conteudo>
        <SectionForm>
          <Title>Entre</Title>
          <DivIcons>
            <ButtonSocial rede="facebook">
              <IconFacebook />
            </ButtonSocial>
            <ButtonSocial>
              <IconGoogle />
            </ButtonSocial>
          </DivIcons>
          <TextForm>ou use sua conta de email</TextForm>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <LinkRecuperacao to="forgot-password">
              Esqueceu sua senha?
            </LinkRecuperacao>
            <BotaoEntrar>Entrar</BotaoEntrar>
          </Form>
        </SectionForm>
        <DivInfo>
          <TitleInfo>Olá, amigo(a)</TitleInfo>
          <TextInfo>Ainda não tem uma conta em nossa plataforma?</TextInfo>
          <LinkCadastro to="register">Cadastre-se</LinkCadastro>
        </DivInfo>
      </Conteudo>
    </Container>
  );
}
