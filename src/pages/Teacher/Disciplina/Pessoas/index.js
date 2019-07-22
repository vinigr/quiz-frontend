import React, { useState, useEffect } from "react";
import api from "../../../../service/api";
import { Container, Title, ListPessoas } from "./styles";
import PlayerItem from "../../../../components/PlayerItem";
import MenuListPlayer from "../../../../components/MenuListPlayer";

export default function Pessoas(props) {
  const [pessoas, setPessoas] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const buscaBanco = async () => {
      const { id } = props.match.params;
      const users = await api.get(`/subject/${id}/users`);
      await setPessoas(users.data.usersSubject);
    };

    buscaBanco();
  }, [props, props.match.params]);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <Title>Membros da disciplina</Title>
      {pessoas.length !== 0 ? (
        <ListPessoas>
          {pessoas.map(player => (
            <PlayerItem
              key={player.user_id}
              player={player}
              handleClick={handleClick}
            />
          ))}
        </ListPessoas>
      ) : (
        <div>Sem usuários</div>
      )}
      <MenuListPlayer handleClose={handleClose} anchorEl={anchorEl} />
    </Container>
  );
}
