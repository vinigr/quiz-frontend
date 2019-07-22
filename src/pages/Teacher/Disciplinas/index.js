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
import MenuDisciplina from "../../../components/MenuDisciplina";
import Modal from "react-responsive-modal";

export default function Disciplinas() {
  const [subjects, setSubjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    buscaBanco();
    document.title = "Disciplinas";
  }, []);

  async function buscaBanco() {
    const subject = await api.get("/teacher/subjects");
    await setSubjects(subject.data.subjects);
  }

  function renderDisciplinas() {
    return (
      <Container>
        <ListaDisciplinas>
          {subjects.map(subject => (
            <DisciplinaItem
              key={subject.id}
              subject={subject}
              handleClick={handleClick}
            />
          ))}
        </ListaDisciplinas>
      </Container>
    );
  }

  function handleModal() {
    setOpenModal(true);
  }

  async function cadastrarDisciplina(e) {
    e.preventDefault();

    try {
      const disciplina = await api.post("/subject/create", {
        name,
        topic
      });
      await setOpenModal(false);
      setSubjects([disciplina.data.subject, ...subjects]);
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
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
      <MenuDisciplina handleClose={handleClose} anchorEl={anchorEl} />
    </div>
  );
}
