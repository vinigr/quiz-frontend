import React from "react";

import { Container, LinkTelaInicial, AppLogo, NomeSite } from "../Login/styles";
import logo from "../../assets/img/logo-branca.png";
import { Header } from "./styles";

export default function ForgotPassword() {
  return (
    <Container>
      <Header>
        <LinkTelaInicial to="/">
          <AppLogo src={logo} />
          <NomeSite>Quest On</NomeSite>
        </LinkTelaInicial>
      </Header>
    </Container>
  );
}
