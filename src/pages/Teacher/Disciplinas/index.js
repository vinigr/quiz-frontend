import React, { useState, useEffect } from "react";

import { Container, ListaDisciplinas, Input } from "./styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import DisciplinaItem from "../../../components/DisciplinaItem";
import BotaoAdicionar from "../../../components/BotaoAdicionar";
import MenuDisciplina from "../../../components/MenuDisciplina";

import api from "../../../service/api";

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
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Disciplina</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete os campos abaixo para cadastar uma nova disciplina em sua
            lista.
          </DialogContentText>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome (Obrigatório)"
          />
          <Input
            required
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="Descrição (Obrigatório)"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)} color="inherit">
            Cancelar
          </Button>
          <Button onClick={e => cadastrarDisciplina(e)} color="inherit">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
      <MenuDisciplina handleClose={handleClose} anchorEl={anchorEl} />
    </div>
  );
}
