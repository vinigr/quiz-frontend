import React, { useState, useEffect } from "react";

import {
  Container,
  Conteudo,
  LinkTelaInicial,
  AppLogo,
  NomeSite,
  IconMail,
  Input,
  TextError
} from "../Login/styles";

import {
  Header,
  Section,
  Title,
  Form,
  DivEmail,
  BotaoRecuperar,
  TextSuccess
} from "./styles";
import logo from "../../assets/img/logo-verde.png";

import api from "../../service/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Recuperação de senha";
  }, []);

  async function enviarEmail(e) {
    e.preventDefault();
    await setError(null);
    await setSuccess(null);
    if (!email || email === "") {
      setError("Dados insuficientes!");
      return;
    }
    try {
      const msg = await api.put("/forgotPassword", {
        email
      });

      setSuccess(msg.data.message);
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
          <Title>Recupere sua senha</Title>
          <Form>
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
            <BotaoRecuperar onClick={e => enviarEmail(e)}>
              Enviar
            </BotaoRecuperar>
            {error && <TextError>{error}</TextError>}
            {success && <TextSuccess>{success}</TextSuccess>}
          </Form>
        </Section>
      </Conteudo>
    </Container>
  );
}
