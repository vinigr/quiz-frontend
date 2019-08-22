import React, { useState, useEffect } from "react";
import DateTime from "@nateradebaugh/react-datetime";
import "@nateradebaugh/react-datetime/css/react-datetime.css";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import pt from "date-fns/locale/pt";
import isAfter from "date-fns/is_after";

import {
  Container,
  DivQuestions,
  DivImage,
  Image,
  IconArrow,
  DivOptions,
  DivOption,
  DivAnswer,
  Dates
} from "./styles";

import api from "../../../../../service/api";
const differenceInMinutes = require("date-fns/difference_in_minutes");

const format = require("date-fns/format");

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function NewQuiz(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [releasedDate, setReleasedtDate] = useState(new Date());
  const [expirationDate, setExpirationDate] = useState();
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionsME, setSelectedQuestionsME] = useState([]);
  const [selectedQuestionsTF, setSelectedQuestionsTF] = useState([]);
  const [feedbackAnswer, setFeedbackAnswer] = useState(false);
  const [groupQuestions, setGroupQuestions] = useState(1);
  const [error, setError] = useState();
  const [expirationActive, setExpirationActive] = useState(false);

  function valid(current) {
    return isAfter(current, new Date());
  }

  useEffect(() => {
    document.title = "Novo Quiz";
  }, []);

  useEffect(() => {
    async function buscaAllQuestions() {
      try {
        if (parseInt(groupQuestions) === 1) {
          const questions = await api.get(
            `/questionsSubject/${props.match.params.id}`
          );
          setQuestions(questions.data);
        }

        if (parseInt(groupQuestions) === 2) {
          const questions = await api.get("/questionsAll");
          setQuestions(questions.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    buscaAllQuestions();
  }, [groupQuestions, props.match.params.id]);

  function handleDate(e) {
    if (typeof e !== "object") return;

    return setReleasedtDate(e);
  }

  function handleDateExpiration(e) {
    if (typeof e !== "object") return;

    return setExpirationDate(e);
  }

  function removeQuestionMe(id) {
    const idQuestions = selectedQuestionsME.filter(question => question !== id);
    setSelectedQuestionsME(idQuestions);
  }

  function removeQuestionTf(id) {
    const idQuestions = selectedQuestionsTF.filter(question => question !== id);
    setSelectedQuestionsTF(idQuestions);
  }

  async function registerQuiz() {
    setError(null);
    if (!name || name === "") return setError("Dados insuficientes!");

    if (!releasedDate || typeof releasedDate !== "object")
      return setError("Data inválida!");

    if (expirationDate && typeof expirationDate !== "object")
      return setError("Data de validade inválida!");

    if (expirationActive) {
      if (expirationDate < Date.now()) {
        setError("Data de validade já expirou!");
        return;
      }
      const timeQuiz = differenceInMinutes(expirationDate, releasedDate);

      if (timeQuiz <= 5 || NaN) {
        setError("Tempo de disponibilizade do quiz muito curto!");
        return;
      }
    }

    if (selectedQuestionsME.length + selectedQuestionsTF.length === 0)
      return setError("As questões não foram selecionadas!");

    try {
      await api.post("/createQuiz", {
        name,
        releasedDate,
        expirationDate: expirationActive ? expirationDate : null,
        selectedQuestionsME,
        selectedQuestionsTF,
        feedbackAnswer,
        subjectId: props.match.params.id
      });

      return props.history.goBack();
    } catch (error) {
      if (error.response) setError("Erro ao cadastrar quiz!");
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
    <Container>
      <h2>Criar quiz</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label>
        Data de liberação:
        <DateTime
          defaultValue={new Date()}
          value={releasedDate}
          locale={pt}
          dateFormat="DD/MM/YYYY"
          isValidDate={valid}
          onChange={e => handleDate(e)}
        />
      </label>
      {!expirationActive ? (
        <button
          className="expiration"
          onClick={() => setExpirationActive(true)}
        >
          Adicionar data de expiração
        </button>
      ) : (
        <>
          <button
            className="expiration"
            onClick={() => setExpirationActive(false)}
          >
            Desativar data de expiração
          </button>
          <label>
            Expira em:
            <DateTime
              defaultValue={new Date()}
              value={expirationDate}
              locale={pt}
              dateFormat="DD/MM/YYYY"
              isValidDate={valid}
              onChange={e => handleDateExpiration(e)}
            />
          </label>
        </>
      )}
      <h3>Questões</h3>
      <div className="select">
        <div>
          <label>Listar questões</label>
          <select
            value={groupQuestions}
            onChange={e => setGroupQuestions(e.target.value)}
          >
            <option value={1}>Disciplina</option>
            <option value={2}>Todas</option>
          </select>
        </div>
        <div className="feedback">
          <label>Resposta ao jogador</label>
          <select
            value={feedbackAnswer}
            onChange={e => setFeedbackAnswer(e.target.value)}
          >
            <option value={false}>Ao final</option>
            <option value={true}>A cada questão</option>
          </select>
        </div>
      </div>
      <span>
        {selectedQuestionsME.length + selectedQuestionsTF.length !== 0 &&
          `${selectedQuestionsME.length +
            selectedQuestionsTF.length} selecionada(s)`}
      </span>
      <DivQuestions>
        <h4>Múltipla escolha</h4>
        {questions.questionsMe &&
          questions.questionsMe.map(question => (
            <ExpansionPanel key={question.id}>
              <ExpansionPanelSummary
                style={{
                  backgroundColor:
                    selectedQuestionsME.indexOf(question.id) !== -1 && "#37996b"
                }}
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
                <div className="button">
                  {selectedQuestionsME.indexOf(question.id) !== -1 ? (
                    <button
                      className="remove"
                      onClick={() => {
                        removeQuestionMe(question.id);
                      }}
                    >
                      Remover
                    </button>
                  ) : (
                    <button
                      className="add"
                      onClick={async () => {
                        setSelectedQuestionsME([
                          ...selectedQuestionsME,
                          question.id
                        ]);
                      }}
                    >
                      Adicionar
                    </button>
                  )}
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        <h4>Verdadeiro e falso</h4>
        {questions.questionsTf &&
          questions.questionsTf.map(question => (
            <ExpansionPanel key={question.id}>
              <ExpansionPanelSummary
                style={{
                  backgroundColor:
                    selectedQuestionsTF.indexOf(question.id) !== -1 && "#37996b"
                }}
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
                <div className="button">
                  {selectedQuestionsTF.indexOf(question.id) !== -1 ? (
                    <button
                      className="remove"
                      onClick={() => {
                        removeQuestionTf(question.id);
                      }}
                    >
                      Remover
                    </button>
                  ) : (
                    <button
                      className="add"
                      onClick={async () => {
                        setSelectedQuestionsTF([
                          ...selectedQuestionsTF,
                          question.id
                        ]);
                      }}
                    >
                      Adicionar
                    </button>
                  )}
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
      </DivQuestions>
      {error && <h4 className="error">{error}</h4>}
      <button className="register" onClick={registerQuiz}>
        Cadastrar quiz
      </button>
    </Container>
  );
}
