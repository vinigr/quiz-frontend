import React, { useState, useEffect } from "react";

import { Container, LinkQuiz } from "./styles";

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
            <LinkQuiz
              key={quiz.id}
              to={{
                pathname: `${props.match.url}/${quiz.id}`,
                state: {
                  quiz
                }
              }}
            >
              <li>
                <h3>{quiz.name}</h3>
                <h3>{quiz.accessCode}</h3>
              </li>
            </LinkQuiz>
          ))}
        </ul>
      )}
      {quizzesNotAvailable.length !== 0 && (
        <ul>
          <h2>Expirados</h2>
          {quizzesNotAvailable.map(quiz => (
            <li key={quiz.id}>
              <LinkQuiz
                to={{
                  pathname: `${props.match.url}/${quiz.id}`,
                  state: {
                    quiz
                  }
                }}
              >
                <h3>{quiz.name}</h3>
                <h3>{quiz.accessCode}</h3>
              </LinkQuiz>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
