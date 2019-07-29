import React from "react";

import Dropzone from "react-dropzone";
import { Container, DivUpload, IconImage, ButtonCreate } from "./styles";

export default function MultiplaEscolha() {
  return (
    <Container>
      <Dropzone>
        {({ getRootProps, getInputProps }) => (
          <DivUpload className="upload" {...getRootProps()}>
            <IconImage />
            <input {...getInputProps()} />
            <p>Arraste uma imagem ou clique aqui</p>
          </DivUpload>
        )}
      </Dropzone>      
      <ButtonCreate>Cadastrar questão</ButtonCreate>
    </Container>
  );
}
