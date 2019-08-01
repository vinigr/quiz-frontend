import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import {
  Container,
  Title,
  DivQuestions,
  DivImage,
  Image,
  IconArrow,
  Add
} from "./styles";
import api from "../../../service/api";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Questoes(props) {
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    document.title = "Questões";
    buscaBanco();
  }, []);

  async function buscaBanco() {
    try {
      const questions = await api.get("/questionMe");
      setQuestions(questions.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Questões</Title>
      <DivQuestions>
        {questions.map(question => (
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </DivQuestions>
      <Add to={`${props.match.path}/new`}>Adicionar</Add>
    </Container>
  );
}
