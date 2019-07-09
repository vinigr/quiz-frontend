import React from "react";
import { Container, Nome, DotsIcon } from "./styles";

const PlayerItem = player => (
  <Container key={player.user_id}>
    <Nome>{player.user.name}</Nome>
    <DotsIcon />
  </Container>
);

export default PlayerItem;
