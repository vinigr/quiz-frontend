import React, { useState, useEffect } from "react";
import api from "../../../../service/api";
import { Container, Title, ListPessoas } from "./styles";
import PlayerItem from "../../../../components/PlayerItem";

export default function Pessoas(props) {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const buscaBanco = async () => {
      const token = await localStorage.getItem("x-access-token");
      const { id } = props.match.params;
      const users = await api.get(`/subject/${id}/users`, {
        headers: {
          "x-access-token": token
        }
      });
      await setPessoas(users.data.usersSubject);
    };

    buscaBanco();
  }, [props, props.match.params]);

  return (
    <Container>
      <Title>Membros da disciplina</Title>
      <ListPessoas>{pessoas.map(PlayerItem)}</ListPessoas>
    </Container>
  );
}
