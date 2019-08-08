import React, { useState, useEffect } from "react";

import { Container, LinkQuiz, Add } from "./styles";

import api from "../../../../../service/api";

export default function List(props) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    document.title = "Questionários";

    async function buscaBanco() {
      try {
        const listQuiz = await api.get(
          `/subjectQuizList/${props.match.params.id}`
        );
        setQuizzes(listQuiz.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    buscaBanco();
  }, [props.match.params.id]);

  return (
    <Container>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <LinkQuiz to={`${props.match.url}/i/${quiz.id}`}>
              {quiz.name}
            </LinkQuiz>
          </li>
        ))}
      </ul>
      <Add to={`${props.match.url}/new`}>Adicionar</Add>
    </Container>
  );
}
