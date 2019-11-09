import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import {
  Title,
  DivQuestions,
  DivImage,
  Image,
  IconArrow,
  DivOptions,
  DivOption,
  DivAnswer,
  Dates,
  Editar
} from "./styles";

import api from "../../../../../service/api";

const format = require("date-fns/format");

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Lista(props) {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    document.title = "Questões";
    buscaBanco();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function buscaBanco() {
    try {
      const questions = await api.get(`/questionsSubject/${id}`);
      setQuestions(questions.data);
    } catch (error) {
      console.log(error);
    }
  }

  function renderOptions(question) {
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
            <p>{option}</p>
          </DivOption>
        )
    );
  }

  return (
    <>
      <Title>Questões</Title>
      <DivQuestions>
        {questions.questionsMe &&
          questions.questionsMe.map(question => (
            <ExpansionPanel key={question.id}>
              <ExpansionPanelSummary
                expandIcon={<IconArrow />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {question.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                {question.pathImage && (
                  <DivImage>
                    <Image src={question.pathImage} />
                  </DivImage>
                )}
                <DivOptions>{renderOptions(question)}</DivOptions>
                <Editar
                  to={{
                    pathname: `${props.match.url}/add/${question.id}`,
                    state: question
                  }}
                >
                  Editar
                </Editar>
                <Dates>
                  <div>
                    <span>Data de criação</span>
                    <span>{format(question.createdAt, "DD/MM/YYYY")}</span>
                  </div>
                  <div>
                    <span>Data de atualização</span>
                    <span>{format(question.updatedAt, "DD/MM/YYYY")}</span>
                  </div>
                </Dates>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        {questions.questionsTf &&
          questions.questionsTf.map(question => (
            <ExpansionPanel key={question.id}>
              <ExpansionPanelSummary
                expandIcon={<IconArrow />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {question.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                {question.pathImage && (
                  <DivImage>
                    <Image src={question.pathImage} />
                  </DivImage>
                )}
                <DivOptions>
                  <DivAnswer answer={question.answer}>
                    <p>{question.answer ? "Verdadeiro" : "Falso"}</p>
                  </DivAnswer>
                </DivOptions>
                <Editar
                  to={{
                    pathname: `${props.match.url}/add/tf/${question.id}`,
                    state: question
                  }}
                >
                  Editar
                </Editar>
                <Dates>
                  <div>
                    <span>Data de criação</span>
                    <span>{format(question.createdAt, "DD/MM/YYYY")}</span>
                  </div>
                  <div>
                    <span>Data de atualização</span>
                    <span>{format(question.updatedAt, "DD/MM/YYYY")}</span>
                  </div>
                </Dates>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
      </DivQuestions>
    </>
  );
}
