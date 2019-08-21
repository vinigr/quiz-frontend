import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <header>
        <Link to="/register">Cadastrar-se</Link>
        <Link to="/login">Entrar</Link>
      </header>
    </Container>
  );
}
