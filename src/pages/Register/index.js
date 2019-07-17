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
  DivEmail,
  DivPassword,
  IconMail,
  IconPassword,
  IconEye,
  IconEyeClosed,
  Input,
  TextError,
  DivInfo,
  TitleInfo,
  TextInfo,
  LinkCadastro
} from "../Login/styles";
import { IconPerson, BotaoCadastrar } from "./styles";

import logo from "../../assets/img/logo-branca.png";
import api from "../../service/api";
import AuthService from "../../service/auth";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  async function login(e) {
    e.preventDefault();
    await setError(null);
    if (
      !name ||
      name === "" ||
      !email ||
      email === "" ||
      !password ||
      password === ""
    ) {
      setError("Dados insuficientes!");
      return;
    }
    try {
      const token = await api.post("/signup", {
        name,
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
        <DivInfo>
          <TitleInfo>Olá, amigo(a)</TitleInfo>
          <TextInfo>Já possui uma conta em nossa plataforma?</TextInfo>
          <LinkCadastro to="login">Entre</LinkCadastro>
        </DivInfo>
        <SectionForm>
          <Title>Cadastre-se</Title>
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
            <DivEmail>
              <IconPerson />
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome Completo"
                required
              />
            </DivEmail>
            <DivEmail>
              <IconMail />
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </DivEmail>
            <DivPassword>
              <IconPassword />
              <Input
                type={secureText ? "password" : "text"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
              {secureText ? (
                <IconEyeClosed onClick={() => setSecureText(false)} />
              ) : (
                <IconEye onClick={() => setSecureText(true)} s />
              )}
            </DivPassword>
            {error && <TextError>{error}</TextError>}
            <BotaoCadastrar onClick={e => login(e)}>Cadastrar</BotaoCadastrar>
          </Form>
        </SectionForm>
      </Conteudo>
    </Container>
  );
}
