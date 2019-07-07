import React, { useState, useEffect } from "react";
import {
  Container,
  ListaDisciplinas,
  TitleForm,
  Form,
  Label,
  Input,
  Button
} from "./styles";
import api from "../../../service/api";
import DisciplinaItem from "../../../components/DisciplinaItem";
import BotaoAdicionar from "../../../components/BotaoAdicionar";
import Modal from "react-responsive-modal";

export default function Disciplinas() {
  const [subjects, setSubjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");

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
    return (
      <Container>
        <ListaDisciplinas>{subjects.map(DisciplinaItem)}</ListaDisciplinas>
      </Container>
    );
  }

  function handleModal() {
    setOpenModal(true);
  }

  async function cadastrarDisciplina(e) {
    e.preventDefault();

    try {
      const token = await localStorage.getItem("x-access-token");

      const disciplina = await api.post(
        "/subject/create",
        {
          name,
          topic
        },
        {
          headers: {
            "x-access-token": token
          }
        }
      );
      await setOpenModal(false);
      setSubjects([disciplina.data.subject, ...subjects]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {renderDisciplinas()}
      <BotaoAdicionar handleModal={handleModal} />
      <Modal open={openModal} onClose={() => setOpenModal(false)} center>
        <TitleForm>Disciplina</TitleForm>
        <Form>
          <Label>Nome</Label>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Label>Descrição</Label>
          <Input
            required
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
          {/* <Label>Código</Label>
          <Input
            value={accessCode}
            onChange={e => setAccessCode(e.target.value)}
          /> */}
          <Button onClick={e => cadastrarDisciplina(e)}>Cadastrar</Button>
        </Form>
      </Modal>
    </div>
  );
}
