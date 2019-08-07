import React from "react";
import { Container, Nome, ImageProfile, DotsIcon } from "./styles";

import image from "../../assets/img/default-person.png";

const PlayerItem = ({ player, handleClick }) => {
  console.log(player);
  return (
    <Container>
      <div>
        <ImageProfile src={player.user.path ? player.user.path : image} />
        <Nome>{player.user.name}</Nome>
      </div>

      <DotsIcon onClick={handleClick} />
    </Container>
  );
};

export default PlayerItem;
