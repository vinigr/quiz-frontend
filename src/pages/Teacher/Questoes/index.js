import React, { useEffect } from "react";

import { Container, Title, Add } from "./styles";

export default function Questoes(props) {
  useEffect(() => {
    document.title = "Questões";
  }, []);

  return (
    <Container>
      <Title>Questões</Title>
      <Add to={`${props.match.path}/new`}>Adicionar</Add>
    </Container>
  );
}
