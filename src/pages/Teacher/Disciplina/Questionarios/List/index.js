import React, { useState, useEffect } from "react";

import { Container, LinkQuiz, Add } from "./styles";

import api from "../../../../../service/api";

export default function List(props) {
  const [quizzesAvailable, setQuizzesAvailable] = useState([]);
  const [quizzesNotAvailable, setQuizzesNotAvailable] = useState([]);

  useEffect(() => {
    document.title = "Questionários";

    async function buscaBanco() {
      try {
        const listQuiz = await api.get(
          `/subjectQuizList/${props.match.params.id}`
        );
        setQuizzesAvailable(listQuiz.data.available);
        setQuizzesNotAvailable(listQuiz.data.notAvailable);
      } catch (error) {
        console.log(error.response);
      }
    }
    buscaBanco();
  }, [props.match.params.id]);

  return (
    <Container>
      {quizzesAvailable.length + quizzesNotAvailable.length === 0 && (
        <h2>Sem quizzes cadastrados</h2>
      )}
      {quizzesAvailable.length !== 0 && (
        <ul>
          <h2>Ativos</h2>
          {quizzesAvailable.map(quiz => (
            <li key={quiz.id}>
              <LinkQuiz to={`${props.match.url}/i/${quiz.id}`}>
                {quiz.name}
              </LinkQuiz>
            </li>
          ))}
        </ul>
      )}
      {quizzesNotAvailable.length !== 0 && (
        <ul>
          <h2>Expirados</h2>
          {quizzesNotAvailable.map(quiz => (
            <li key={quiz.id}>
              <LinkQuiz to={`${props.match.url}/i/${quiz.id}`}>
                {quiz.name}
              </LinkQuiz>
            </li>
          ))}
        </ul>
      )}
      <Add to={`${props.match.url}/new`}>Adicionar</Add>
    </Container>
  );
}
