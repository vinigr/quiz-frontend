import React from "react";
import { Container, Nome, DotsIcon } from "./styles";

const PlayerItem = ({ player, handleClick }) => {
  console.log(player);
  return (
    <Container>
      <Nome>{player.user.name}</Nome>
      <DotsIcon onClick={handleClick} />
    </Container>
  );
};

export default PlayerItem;
