import React, { useState, useEffect } from "react";

import { Container, ListaDisciplinas, Input } from "./styles";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

import DisciplinaItem from "../../../components/DisciplinaItem";
import BotaoAdicionar from "../../../components/BotaoAdicionar";
import MenuDisciplina from "../../../components/MenuDisciplina";

import api from "../../../service/api";

export default function Disciplinas() {
  const [subjects, setSubjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [disciplinaMenu, setDisciplinaMenu] = useState(null);

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

  function closeModal() {
    setOpenModal(false);
    setEdit(false);
    setName("");
    setTopic("");
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

  async function excluirDisciplina() {
    if (!disciplinaMenu) {
      return handleClose();
    }

    try {
      const disciplina = await api.delete(`/subject/${disciplinaMenu}`);
      await setSubjects(
        subjects.filter(subject => subject.id !== disciplina.data.id)
      );
    } catch (err) {
      console.log(err);
    }
    handleClose();
  }

  async function editarDisciplina() {
    if (!disciplinaMenu) {
      return handleClose();
    }

    try {
      await setEdit(true);
      const subject = subjects.filter(subject => subject.id === disciplinaMenu);
      setName(subject[0].name);
      setTopic(subject[0].topic);
      handleModal();
    } catch (err) {
      console.log(err);
    }

    handleClose();
  }

  async function updateDisciplina() {
    function isElement(subject) {
      return subject.id === disciplinaMenu;
    }

    const subjectIndex = subjects.findIndex(isElement);

    try {
      await api.put("/subject/update", {
        id: disciplinaMenu,
        name,
        topic
      });
      subjects.splice(subjectIndex, 1, {
        id: disciplinaMenu,
        name,
        topic,
        accessCode: subjects[subjectIndex].accessCode
      });
    } catch ({ response }) {
      console.log(response.data.message);
    }

    setName("");
    setTopic("");
    setEdit(false);
    setOpenModal(false);
  }

  function handleClick(e, id) {
    setAnchorEl(e.currentTarget);
    setDisciplinaMenu(id);
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
        onClose={closeModal}
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
          <Button onClick={closeModal} color="inherit">
            Cancelar
          </Button>
          {!edit ? (
            <Button onClick={e => cadastrarDisciplina(e)} color="inherit">
              Cadastrar
            </Button>
          ) : (
            <Button onClick={e => updateDisciplina(e)} color="inherit">
              Atualizar
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <MenuDisciplina
        handleClose={handleClose}
        anchorEl={anchorEl}
        excluirDisciplina={excluirDisciplina}
        editarDisciplina={editarDisciplina}
      />
    </div>
  );
}
