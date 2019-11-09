import React, { useState, useEffect } from "react";

import { useDropzone } from "react-dropzone";

import { Snackbar } from "@material-ui/core";

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
  AreaExplication,
  TextError,
  ButtonCreate
} from "./styles";

import MySnackbarContentWrapper from "../../../../../../components/SnackBar";

import api from "../../../../../../service/api";

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

export default function MultiplaEscolha(props) {
  const [question, setQuestion] = useState();
  const [image, setImage] = useState();
  const [options, setOptions] = useState(_defaultCosts);
  const [answerCorrect, setAnswerCorrect] = useState();
  const [explanation, setExplanation] = useState();
  const [error, setError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    const { state } = props.location;
    if (state) {
      setQuestion(state.question);
      setImage(state.pathImage);

      setOptions([
        {
          option: state.options[0]
        },
        {
          option: state.options[1]
        },
        {
          option: state.options[2] || ""
        },
        {
          option: state.options[3] || ""
        },
        {
          option: state.options[4] || ""
        }
      ]);
      setAnswerCorrect(state.answer);
      setExplanation(state.explanation);
    }
  }, [image, props.location]);

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

    if (!props.subjectSelect || props.subjectSelect === -1)
      setError("Disciplina não selecionada!");

    const subjectId = props.match.params.id;

    const data = new FormData();

    data.append("question", question);
    data.append("image", image);
    data.append("options", JSON.stringify(optionsValid));
    data.append("answer", answer);
    data.append("explanation", explanation);
    data.append("subjectId", subjectId);

    try {
      await api.post("/questionMe", data);
      setMessage("Questão cadastrada com sucesso!");
      setOpenSuccess(true);
      setQuestion("");
      setOptions([
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
      ]);
      setImage(null);
      setAnswerCorrect(null);
      setExplanation("");
    } catch (err) {
      setMessage("Erro ao cadastrar questão!");
      setOpenError(true);
    }
  }

  useEffect(() => {
    if (image) {
      URL.revokeObjectURL(image.preview);
    }
  }, [image]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  }

  async function editQuestion() {
    const { state } = props.location;

    const optionsBefore = [
      {
        option: state.options[0]
      },
      {
        option: state.options[1]
      },
      {
        option: state.options[2] || ""
      },
      {
        option: state.options[3] || ""
      },
      {
        option: state.options[4] || ""
      }
    ];

    if (
      question === state.question &&
      JSON.stringify(options) === JSON.stringify(optionsBefore) &&
      state.answer === answerCorrect &&
      state.explanation === explanation &&
      state.pathImage === image &&
      state.subjectId === props.subjectSelect
    ) {
      setMessage("Você não fez alterações!");
      return setOpenError(true);
    }

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

    const subjectId = props.match.params.id;

    const data = new FormData();

    data.append("question", question);
    data.append("options", JSON.stringify(optionsValid));
    data.append("answer", answer);
    data.append("explanation", explanation);
    data.append("subjectId", subjectId);

    if (image) {
      image.preview
        ? data.append("image", image)
        : data.append("pathImage", image);
    }

    try {
      await api.put(`/questionMe/${state.id}`, data);
      setMessage("Questão atualizada com sucesso!");
      setOpenSuccess(true);
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
          <Image src={image.preview || image} />
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
              checked={answerCorrect == index}
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
      <AreaExplication
        value={explanation}
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
