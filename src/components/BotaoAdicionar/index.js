import React from "react";
import { Button, Icon } from "./styles";

const BotaoAdicionar = props => (
  <Button onClick={() => props.handleModal()}>
    <Icon />
  </Button>
);

export default BotaoAdicionar;
