import React, { useState, useEffect } from "react";
import DateTime from "@nateradebaugh/react-datetime";
import "@nateradebaugh/react-datetime/css/react-datetime.css";

import pt from "date-fns/locale/pt";
import isAfter from "date-fns/is_after";

import { Container } from "./styles";

export default function NewQuiz() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [questions, setQuestions] = useState([]);

  function valid(current) {
    return isAfter(current, new Date());
  }

  useEffect(() => {
    document.title = "Novo Quiz";
  }, []);

  // useEffect(() => {
  //   console.log(typeof date);
  // }, [date]);

  function handleDate(e) {
    const newDate = new Date(e).toISOString();
    console.log(e);
    return setDate(newDate);
  }

  return (
    <Container>
      <h2>Criar quiz</h2>
      <input type="text" placeholder="Nome" />
      <DateTime
        defaultValue={new Date()}
        locale={pt}
        dateFormat="DD/MM/YYYY"
        isValidDate={valid}
        onChange={e => handleDate(e)}
      />
    </Container>
  );
}
