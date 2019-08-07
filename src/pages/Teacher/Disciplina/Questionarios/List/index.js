import React, { useState, useEffect } from "react";

import { Container, Add } from "./styles";

export default function List(props) {
  useEffect(() => {
    document.title = "Questionários";
  }, []);

  return (
    <Container>
      <Add to={`${props.match.url}/new`}>Adicionar</Add>
    </Container>
  );
}
