import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import { Container } from "./styles";

import {
  DivOptions,
  DivOption,
  DivImage,
  Image,
  DivAnswer
} from "../../NewQuiz/styles";

import api from "../../../../../../service/api";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    // width: "100vw",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    alignItems: "center",
    justifyContent: "space-between",
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {
    display: "flex",
    justifyContent: "space-between"
  }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export default function Estatisticas(props) {
  const [expanded, setExpanded] = useState();
  const [questions, setQuestions] = useState([]);
  const [questionsAnswered, setQuestionsAnswered] = useState([]);
  const [countDisputes, setCountDisputes] = useState([]);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const quizId = props.match.params.id;
        const { data } = await api.get(`/statusQuiz/${quizId}`);
        setQuestions(data.questions);
        setQuestionsAnswered(data.questionsAnswered);
        setCountDisputes(data.disputes);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    }

    fetchData();
  }, [props.match.params]);

  function renderOptions(question, questionId) {
    const arrayOptions = [];
    arrayOptions.push(
      question.option1,
      question.option2,
      question.option3,
      question.option4,
      question.option5
    );
    Object.assign(question, { options: arrayOptions });

    const { options } = question;

    return options.map(
      (option, index) =>
        option !== null && (
          <DivOption key={index} position={index} answer={question.answer}>
            <Typography>{option}</Typography>
            <div>
              <h4>
                {
                  questionsAnswered.filter(answered => {
                    return (
                      answered.question_id === questionId &&
                      parseInt(answered.selectedAnswer) === index
                    );
                  }).length
                }
              </h4>
              <h4>
                {questionsAnswered.filter(answered => {
                  return answered.question_id === questionId;
                }).length &&
                  (questionsAnswered.filter(answered => {
                    return (
                      answered.question_id === questionId &&
                      parseInt(answered.selectedAnswer) === index
                    );
                  }).length /
                    questionsAnswered.filter(answered => {
                      return answered.question_id === questionId;
                    }).length) *
                    100}
                %
              </h4>
            </div>
          </DivOption>
        )
    );
  }

  const { quiz } = props.location.state;

  return (
    <Container>
      <div className="quiz-info">
        <h2>{quiz.name}</h2>
        <h3>{countDisputes} partidas iniciadas</h3>
      </div>
      <div className="questions">
        {questions.map((question, index) => (
          <ExpansionPanel
            key={question.id}
            square
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <ExpansionPanelSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                {question.meQuestion
                  ? question.meQuestion.question
                  : question.tfQuestion.question}
              </Typography>
              <div className="hits">
                <Typography>Acertos</Typography>
                <Typography>
                  {
                    questionsAnswered.filter(answered => {
                      return (
                        answered.question_id === question.id &&
                        answered.result === "hit"
                      );
                    }).length
                  }
                  /
                  {
                    questionsAnswered.filter(answered => {
                      return answered.question_id === question.id;
                    }).length
                  }
                </Typography>
                <h5>
                  {questionsAnswered.filter(answered => {
                    return answered.question_id === question.id;
                  }).length &&
                    (questionsAnswered.filter(answered => {
                      return (
                        answered.question_id === question.id &&
                        answered.result === "hit"
                      );
                    }).length /
                      questionsAnswered.filter(answered => {
                        return answered.question_id === question.id;
                      }).length) *
                      100}
                  %
                </h5>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
              }}
            >
              {question.meQuestion && question.meQuestion.pathImage && (
                <DivImage>
                  <Image src={question.meQuestion.pathImage} />
                </DivImage>
              )}
              {question.tfQuestion && question.tfQuestion.pathImage && (
                <DivImage>
                  <Image src={question.tfQuestion.pathImage} />
                </DivImage>
              )}
              <DivOptions>
                {question.meQuestion ? (
                  renderOptions(question.meQuestion, question.id)
                ) : (
                  <DivAnswer answer={question.tfQuestion.answer}>
                    <Typography>
                      {question.tfQuestion.answer ? "Verdadeiro" : "Falso"}
                    </Typography>
                  </DivAnswer>
                )}
              </DivOptions>
              <h5>
                {questionsAnswered.filter(answered => {
                  return answered.question_id === question.id;
                }).length &&
                  (questionsAnswered.filter(answered => {
                    return (
                      answered.question_id === question.id &&
                      answered.result === "skip"
                    );
                  }).length /
                    questionsAnswered.filter(answered => {
                      return answered.question_id === question.id;
                    }).length) *
                    100}
                % pularam
              </h5>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </Container>
  );
}
