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

import MySnackbarContentWrapper from "../../../../../../components/SnackBar";

import api from "../../../../../../service/api";

export default function TrueOrFalse(props) {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState();
  const [answerCorrect, setAnswerCorrect] = useState();
  const [explanation, setExplanation] = useState();
  const [error, setError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

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

    const subjectId = props.match.params.id;

    const data = new FormData();

    data.append("question", question);
    data.append("image", image);
    data.append("answer", answerCorrect);
    data.append("explanation", explanation);
    data.append("subjectId", subjectId);

    try {
      await api.post("/questionTf", data);
      setOpenSuccess(true);
      setQuestion("");
      setImage(null);
      setAnswerCorrect(null);
      setExplanation("");
    } catch (err) {
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
            value={true}
            type="radio"
            onChange={e => {
              setAnswerCorrect(e.target.value);
            }}
            hidden
          />
          <LabelOption htmlFor="true">Verdadeiro</LabelOption>
        </DivOption>
        <DivOption>
          <InputRadio
            name="option"
            id="false"
            value={false}
            type="radio"
            onChange={e => {
              setAnswerCorrect(e.target.value);
            }}
            hidden
          />
          <LabelOption htmlFor="false">Falso</LabelOption>
        </DivOption>
      </DivOptions>
      <AreaExplication
        value={explanation}
        placeholder="Explicação (opcional)"
        rows="5"
        required
        onChange={e => setExplanation(e.target.value)}
      />
      {error && <TextError>{error}</TextError>}
      <ButtonCreate onClick={registerQuestion}>Cadastrar questão</ButtonCreate>
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
          message="Questão cadastrada com sucesso!"
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
          message="Erro ao cadastrar questão!"
        />
      </Snackbar>
    </Container>
  );
}
