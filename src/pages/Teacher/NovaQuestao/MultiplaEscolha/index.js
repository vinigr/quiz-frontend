import React, { useState } from "react";

import Dropzone from "react-dropzone";
import {
  Container,
  DivUpload,
  IconImage,
  LabelOption,
  InputRadio,
  DivOptions,
  DivOption,
  AreaOption,
  IconVerified,
  ButtonCreate
} from "./styles";

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
  const [options, setOptions] = useState(_defaultCosts);
  const [answerCorrect, setAnswerCorrect] = useState();

  function handleOptionsChange(e) {
    console.log(answerCorrect);
    const _tempOptions = [...options];
    _tempOptions[e.target.dataset.id][e.target.name] = e.target.value;

    setOptions(_tempOptions);
  }

  return (
    <Container>
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <DivUpload {...getRootProps()}>
            <IconImage />
            <input {...getInputProps()} />
            <p>Arraste uma imagem ou clique aqui</p>
          </DivUpload>
        )}
      </Dropzone>

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
              <IconVerified />
            </LabelOption>
          </DivOption>
        ))}
      </DivOptions>

      <ButtonCreate>Cadastrar questão</ButtonCreate>
    </Container>
  );
}
