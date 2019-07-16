import React, { useState, useEffect } from "react";

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
  TextError,
  LinkRecuperacao,
  BotaoEntrar,
  DivInfo,
  TitleInfo,
  TextInfo,
  LinkCadastro
} from "./styles";
import logo from "../../assets/img/logo-verde.png";
import api from "../../service/api";
import AuthService from "../../service/auth";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Login";
  }, []);

  async function login(e) {
    e.preventDefault();
    await setError(null);
    if (!email || email === "" || !password || password === "") {
      setError("Dados insuficientes!");
      return;
    }
    try {
      const token = await api.post("/signin", {
        email,
        password
      });

      await AuthService.setToken(token.data.token);
      props.history.go();
    } catch (err) {
      return setError(err.response.data.message);
    }
  }

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
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            {error && <TextError>{error}</TextError>}
            <LinkRecuperacao to="forgot-password">
              Esqueceu sua senha?
            </LinkRecuperacao>
            <BotaoEntrar onClick={e => login(e)}>Entrar</BotaoEntrar>
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
