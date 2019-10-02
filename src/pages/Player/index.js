import React from "react";

import { Container } from "./styles";
import AuthService from "../../service/auth";

export default function Player(props) {
  function exit() {
    AuthService.logout(props);
  }

  return (
    <Container>
      <h2>
        Acesse sua conta pelo nosso aplicativo! Em breve a versão web estará
        disponível!
      </h2>
      <button onClick={() => exit()}>Sair</button>
    </Container>
  );
}
