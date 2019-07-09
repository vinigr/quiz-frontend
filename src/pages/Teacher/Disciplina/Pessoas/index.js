import React, { useState, useEffect } from "react";
import api from "../../../../service/api";
// import { Container } from './styles';

export default function Pessoas(props) {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    buscaBanco();
  }, [buscaBanco]);

  async function buscaBanco() {
    const token = await localStorage.getItem("x-access-token");
    const { id } = props.match.params;
    const users = await api.get(`/subject/${id}/users`, {
      headers: {
        "x-access-token": token
      }
    });
    await setPessoas(users.data.usersSubject);
  }

  return (
    <div>
      {console.log(props)}
      Olá
    </div>
  );
}
