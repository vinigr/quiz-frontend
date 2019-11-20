import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import RankingQuiz from "../../../../../../components/RankingQuiz";

import api from "../../../../../../service/api";

const RealTime = props => {
  const [quiz, setQuiz] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const quizId = props.match.params.id;
        const { data } = await api.get(`/infoQuiz/${quizId}`);
        setQuiz(data.quiz.name);
        setQuestions(data.questions);

        document.title = `Quiz | ${data.quiz.name}`;
      } catch (error) {}
    }

    fetchData();
  }, [props.match.params, props.match.params.id]);

  return (
    <Container>
      <h2>{quiz}</h2>
      <RankingQuiz name={quiz} total={questions} {...props} />
    </Container>
  );
};

export default RealTime;
