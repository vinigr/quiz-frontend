import React, { useState, useEffect } from "react";

import { Container, Add } from "./styles";

import api from "../../../../../service/api";

export default function List(props) {
  useEffect(() => {
    document.title = "Questionários";

    async function buscaBanco() {
      try {
        const listQuiz = await api.get(
          `/subjectQuizList/${props.match.params.id}`
        );
        console.log(listQuiz.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    buscaBanco();
  }, [props.match.params.id]);

  return (
    <Container>
      {/* <p></p> */}
      <Add to={`${props.match.url}/new`}>Adicionar</Add>
    </Container>
  );
}
