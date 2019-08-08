import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

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
  ButtonCreate
} from "../MultiplaEscolha/styles";

import api from "../../../../service/api";

export default function TrueOrFalse(props) {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState();
  const [answerCorrect, setAnswerCorrect] = useState();
  const [error, setError] = useState(null);

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
    data.append("subjectId", subjectId);

    try {
      const resp = await api.post("/questionTf", data);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
      // return setError(err.data.message);
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
      {error && <TextError>{error}</TextError>}
      <ButtonCreate onClick={registerQuestion}>Cadastrar questão</ButtonCreate>
    </Container>
  );
}
