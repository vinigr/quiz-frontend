import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/img/logo-verde.png";

import api from "../../service/api";

export default function Confirmation(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { token } = props.match.params;

  async function fetchData() {
    try {
      await api.get(`/confirmation/${token}`);
    } catch ({ response }) {
      setError(response.data.message);
    }
    await setLoading(false);
    return;
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Quest On" />
      </Link>
      {!loading &&
        (!error ? (
          <>
            <h2>Tudo certo!</h2>
            <p>
              A sua conta está confirmada, clique no botão abaixo para
              acessá-la.
            </p>
            <Link id="button" to="/login">
              Entrar
            </Link>
          </>
        ) : (
          <>
            <h2 id="erro">Erro</h2>
            <p>{error}</p>
          </>
        ))}
    </Container>
  );
}
