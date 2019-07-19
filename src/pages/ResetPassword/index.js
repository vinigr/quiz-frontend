import React, { useState, useEffect } from "react";

import {
  Container,
  Header,
  Conteudo,
  LinkTelaInicial,
  AppLogo,
  NomeSite,
  IconPassword,
  Input,
  TextError,
  IconEye,
  IconEyeClosed
} from "../Login/styles";

import {
  Section,
  Title,
  Form,
  BotaoRecuperar,
  TextSuccess
} from "../ForgotPassword/styles";
import { DivPassword } from "./styles";

import logo from "../../assets/img/logo-verde.png";

import api from "../../service/api";

export default function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [idUser, setIdUser] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [generalError, setGeneralError] = useState(null);

  useEffect(() => {
    const buscaBanco = async () => {
      const { token } = props.match.params;

      if (!token) return;

      try {
        const user = await api.get(`/resetPassword/${token}`);
        await setIdUser(user.data.id);
      } catch (err) {
        return setGeneralError(err.response.data.message);
      }
    };

    buscaBanco();
    document.title = "Redefinir senha";
  }, [props.match.params]);

  async function alterarSenha(e) {
    e.preventDefault();
    await setError(null);
    await setSuccess(null);
    if (
      !password ||
      password === "" ||
      !confirmPassword ||
      confirmPassword === ""
    ) {
      return setError("Dados insuficientes!");
    }

    if (password !== confirmPassword)
      return setError("As senhas não são iguais!");

    if (!idUser) {
      return setError("Não é possível alterar a senha!");
    }

    try {
      const msg = await api.put("/updatePassword", {
        id: idUser,
        password
      });

      setSuccess(msg.data.message);
      setTimeout(() => {
        props.history.push("/login");
      }, 2000);
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
        <Section>
          {generalError ? (
            <h2>{generalError}</h2>
          ) : (
            <>
              <Title>Redefinir senha</Title>
              <Form>
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
                <DivPassword>
                  <IconPassword />
                  <Input
                    type={secureText ? "password" : "text"}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirme a senha"
                  />
                  {secureText ? (
                    <IconEyeClosed onClick={() => setSecureText(false)} />
                  ) : (
                    <IconEye onClick={() => setSecureText(true)} s />
                  )}
                </DivPassword>
                <BotaoRecuperar onClick={e => alterarSenha(e)}>
                  Alterar
                </BotaoRecuperar>
                {error && <TextError>{error}</TextError>}
                {success && <TextSuccess>{success}</TextSuccess>}
              </Form>
            </>
          )}
        </Section>
      </Conteudo>
    </Container>
  );
}
