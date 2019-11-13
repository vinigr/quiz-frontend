import React from "react";
import { Link } from "react-router-dom";

import { Container, ImgSmart } from "./styles";

import mockupSmart from "../../assets/img/mockupSmartphone.png";

export default function Home() {
  return (
    <Container>
      <header>
        <Link to="/register">Cadastrar-se</Link>
        <Link to="/login">Entrar</Link>
      </header>
      <section id="presentation">
        <ImgSmart src={mockupSmart} />
        <div>
          <h2>Quest On</h2>
          <h3>
            O app de <i>quizzes</i> para educação
          </h3>
        </div>
      </section>
    </Container>
  );
}
