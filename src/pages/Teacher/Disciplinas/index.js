import React, { useState, useEffect } from "react";
import { Container, ListaDisciplinas } from "./styles";
import api from "../../../service/api";
import DisciplinaItem from "../../../components/DisciplinaItem";

export default function Disciplinas() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    buscaBanco();
  }, []);

  async function buscaBanco() {
    const token = await localStorage.getItem("x-access-token");
    const subject = await api.get("/teacher/subjects", {
      headers: {
        "x-access-token": token
      }
    });
    await setSubjects(subject.data.subjects);
  }

  function renderDisciplinas() {
    return <ListaDisciplinas>{subjects.map(DisciplinaItem)}</ListaDisciplinas>;
  }

  return <div>{renderDisciplinas()}</div>;
}
