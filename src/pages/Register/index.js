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
import {
  IconPerson,
  BotaoCadastrar,
  TypeUser,
  InputUser,
  LabelUser,
  TextUser
} from "./styles";

import logo from "../../assets/img/logo-branca.png";
import api from "../../service/api";
import AuthService from "../../service/auth";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [groupUser, setGroupUser] = useState("");
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
      password === "" ||
      !groupUser ||
      groupUser === ""
    ) {
      return setError("Dados insuficientes!");
    }

    if ((parseInt(groupUser) !== 1) & (parseInt(groupUser) !== 2)) {
      return setError("Grupo de usuário não aceito!");
    }

    try {
      const token = await api.post("/signup", {
        name,
        email,
        password,
        groupUser
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
                <IconEye onClick={() => setSecureText(true)} />
              )}
            </DivPassword>
            <TextUser>Criar conta como</TextUser>
            <TypeUser>
              <InputUser
                id="aluno"
                value="1"
                checked={groupUser === "1"}
                onChange={e => {
                  setGroupUser(e.target.value);
                }}
                name="type-user"
                type="radio"
                hidden
              />
              <LabelUser htmlFor="aluno">Aluno</LabelUser>
              <InputUser
                id="professor"
                value="2"
                checked={groupUser === "2"}
                onChange={e => {
                  setGroupUser(e.target.value);
                }}
                name="type-user"
                type="radio"
                hidden
              />
              <LabelUser htmlFor="professor">Professor</LabelUser>
            </TypeUser>
            {error && <TextError>{error}</TextError>}
            <BotaoCadastrar onClick={e => login(e)}>Cadastrar</BotaoCadastrar>
          </Form>
        </SectionForm>
      </Conteudo>
      {console.log(groupUser)}
    </Container>
  );
}
