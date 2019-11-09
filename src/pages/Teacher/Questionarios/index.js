import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import ItemLista from "../../../components/ItemListaQuiz/ItemListaQuiz";

import api from "../../../service/api";

export default function Questionarios(props) {
  const [quizzesAvailable, setQuizzesAvailable] = useState([]);
  const [quizzesNotAvailable, setQuizzesNotAvailable] = useState([]);

  useEffect(() => {
    document.title = "Questionários";
    async function fetchData() {
      const { data } = await api.get("/allQuizzesTeacher");
      setQuizzesAvailable(data.available);
      setQuizzesNotAvailable(data.notAvailable);
    }

    fetchData();
  }, []);
  return (
    <Container>
      {quizzesAvailable.length + quizzesNotAvailable.length === 0 && (
        <h2>Sem quizzes cadastrados</h2>
      )}
      {quizzesAvailable.length !== 0 && (
        <ul>
          <h2>Ativos</h2>
          {quizzesAvailable.map(quiz => (
            <ItemLista key={quiz.id} quiz={quiz} {...props} />
          ))}
        </ul>
      )}
      {quizzesNotAvailable.length !== 0 && (
        <ul>
          <h2>Expirados</h2>
          {quizzesNotAvailable.map(quiz => (
            <ItemLista key={quiz.id} quiz={quiz} {...props} />
          ))}
        </ul>
      )}
    </Container>
  );
}
