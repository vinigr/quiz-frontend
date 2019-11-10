import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { Snackbar } from "@material-ui/core";

import {
  Container,
  DivOptions,
  DivOption,
  InputRadio,
  LabelOption
} from "./styles";
import {
  AreaPergunta,
  DivImage,
  Image,
  IconClose,
  DivUpload,
  IconImage,
  TextError,
  ButtonCreate,
  AreaExplication
} from "../MultiplaEscolha/styles";

import MySnackbarContentWrapper from "../../../../components/SnackBar";

import api from "../../../../service/api";

export default function TrueOrFalse(props) {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState();
  const [answerCorrect, setAnswerCorrect] = useState();
  const [explanation, setExplanation] = useState("");
  const [error, setError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    const { state } = props.location;

    if (state) {
      setQuestion(state.question);
      setImage(state.pathImage);
      setAnswerCorrect(state.answer);
      setExplanation(state.explanation);
    }
  }, [props.location]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDropAccepted: acceptedFile => {
      setImage(
        Object.assign(acceptedFile[0], {
          preview: URL.createObjectURL(acceptedFile[0])
        })
      );
    }
  });

  useEffect(() => {
    if (image) {
      URL.revokeObjectURL(image.preview);
    }
  }, [image]);

  async function registerQuestion(e) {
    e.preventDefault();
    setError(null);

    if (!question) return setError("Pergunta incompleta!");
    if (!answerCorrect) return setError("Opção correta não selecionada!");

    if (!props.subjectSelect || props.subjectSelect === -1)
      setError("Disciplina não selecionada!");

    const subjectId =
      props.subjectSelect &&
      props.subjectSelect !== undefined &&
      props.subjectSelect !== -1
        ? props.subjectSelect
        : null;

    const data = new FormData();

    data.append("question", question);
    data.append("image", image);
    data.append("answer", answerCorrect);
    data.append("explanation", explanation);
    data.append("subjectId", subjectId);

    try {
      await api.post("/questionTf", data);
      setMessage("Questão cadastrada com sucesso!");
      setOpenSuccess(true);
      setQuestion("");
      setImage(null);
      setAnswerCorrect(null);
      setExplanation("");
    } catch (err) {
      setMessage("Erro ao cadastrar questão!");
      setOpenError(true);
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  }

  async function editQuestion() {
    const { state } = props.location;

    if (
      question === state.question &&
      state.answer === answerCorrect &&
      state.explanation === explanation &&
      state.pathImage === image &&
      state.subjectId === props.subjectSelect
    ) {
      setMessage("Você não fez alterações!");
      return setOpenError(true);
    }

    if (!props.subjectSelect || props.subjectSelect === -1)
      setError("Disciplina não selecionada!");

    const subjectId =
      props.subjectSelect &&
      props.subjectSelect !== undefined &&
      props.subjectSelect !== -1
        ? props.subjectSelect
        : null;

    const data = new FormData();

    data.append("question", question);
    data.append("image", image);
    data.append("answer", answerCorrect);
    data.append("explanation", explanation);
    data.append("subjectId", subjectId);

    if (image) {
      image.preview
        ? data.append("image", image)
        : data.append("pathImage", image);
    }

    try {
      await api.put(`/questionTf/${state.id}`, data);
      setMessage("Questão atualizada com sucesso!");
      return setOpenSuccess(true);
    } catch (err) {
      setMessage("Erro ao atualizar questão!");
      setOpenError(true);
    }
  }

  return (
    <Container>
      <AreaPergunta
        value={question}
        placeholder="Pergunta"
        rows="5"
        required
        onChange={e => setQuestion(e.target.value)}
      />
      {image ? (
        <DivImage>
          <Image src={image.preview} />
          <IconClose onClick={() => setImage(null)} />
        </DivImage>
      ) : (
        <DivUpload {...getRootProps()}>
          <IconImage />
          <input {...getInputProps()} />
          <p>Arraste uma imagem ou clique aqui</p>
        </DivUpload>
      )}
      <DivOptions>
        <DivOption>
          <InputRadio
            name="option"
            id="true"
            checked={answerCorrect ? JSON.parse(answerCorrect) === true : false}
            value={true}
            type="radio"
            onChange={e => {
              setAnswerCorrect(JSON.parse(e.target.value));
            }}
            hidden
          />
          <LabelOption htmlFor="true">Verdadeiro</LabelOption>
        </DivOption>
        <DivOption>
          <InputRadio
            name="option"
            id="false"
            checked={answerCorrect === false}
            value={false}
            type="radio"
            onChange={e => {
              setAnswerCorrect(JSON.parse(e.target.value));
            }}
            hidden
          />
          <LabelOption htmlFor="false">Falso</LabelOption>
        </DivOption>
      </DivOptions>
      <AreaExplication
        value={explanation || ""}
        placeholder="Explicação (opcional)"
        rows="5"
        required
        onChange={e => setExplanation(e.target.value)}
      />
      {error && <TextError>{error}</TextError>}

      {!props.location.state ? (
        <ButtonCreate onClick={registerQuestion}>
          Cadastrar questão
        </ButtonCreate>
      ) : (
        <ButtonCreate onClick={editQuestion}>Editar questão</ButtonCreate>
      )}

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message={message}
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message={message}
        />
      </Snackbar>
    </Container>
  );
}
