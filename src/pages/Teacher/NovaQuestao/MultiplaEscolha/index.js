import React, { useState, useEffect } from "react";

import { useDropzone } from "react-dropzone";
import {
  Container,
  DivUpload,
  DivImage,
  Image,
  IconClose,
  AreaPergunta,
  IconImage,
  LabelOption,
  InputRadio,
  DivOptions,
  DivOption,
  AreaOption,
  IconVerified,
  TextError,
  ButtonCreate
} from "./styles";

import api from "../../../../service/api";

const _defaultCosts = [
  {
    option: ""
  },
  {
    option: ""
  },
  {
    option: ""
  },
  {
    option: ""
  },
  {
    option: ""
  }
];

export default function MultiplaEscolha() {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState();
  const [options, setOptions] = useState(_defaultCosts);
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

  function handleOptionsChange(e) {
    const _tempOptions = [...options];
    _tempOptions[e.target.dataset.id][e.target.name] = e.target.value;

    setOptions(_tempOptions);
  }

  async function registerQuestion(e) {
    e.preventDefault();
    setError(null);

    if (!question) return setError("Pergunta incompleta!");
    if (!answerCorrect) return setError("Opção correta não selecionada!");

    const optionsValid = options.filter(option => {
      return option.option !== "";
    });

    if (optionsValid.indexOf(options[answerCorrect]) === -1)
      return setError("Opção marcada como correta não possui texto!");

    if (optionsValid.length < 2)
      return setError("É preciso ao menos 2 alternativas válidas");

    const answer = optionsValid.indexOf(options[answerCorrect]);

    const data = new FormData();

    data.append("question", question);
    data.append("image", image);
    data.append("options", JSON.stringify(optionsValid));
    data.append("answer", answer);

    try {
      const question = await api.post("/questionME", data);
    } catch (err) {
      return setError(err.data.message);
    }
  }

  useEffect(() => {
    if (image) {
      URL.revokeObjectURL(image.preview);
    }
  }, [image]);

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
        {options.map((item, index) => (
          <DivOption key={index}>
            <InputRadio
              name="option"
              id={`option${index}`}
              value={index}
              type="radio"
              onChange={e => {
                setAnswerCorrect(e.target.value);
              }}
              hidden
            />
            <LabelOption htmlFor={`option${index}`}>
              <AreaOption
                name="option"
                data-id={index}
                placeholder={`Opção ${index + 1}`}
                value={item.option}
                rows="3"
                onChange={handleOptionsChange}
              />
              {index === parseInt(answerCorrect) && <IconVerified />}
            </LabelOption>
          </DivOption>
        ))}
      </DivOptions>
      {error && <TextError>{error}</TextError>}
      <ButtonCreate onClick={registerQuestion}>Cadastrar questão</ButtonCreate>
    </Container>
  );
}