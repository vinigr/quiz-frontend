import React, { useState, useEffect } from "react";
import socket from "socket.io-client";

import { Container } from "./styles";
import ProgressBar from "../ProgressBar";

import api from "../../service/api";

export default function RankingQuiz(props) {
  const [disputes, setDisputes] = useState([]);
  const [nameVisible, setNameVisible] = useState(false);

  const quizId = props.match.params.id;
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/ranking/${quizId}`);
        setDisputes(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    }

    fetchData();
  }, [quizId]);

  useEffect(() => {
    let io;

    function subscribeToEvents() {
      io = socket(process.env.REACT_APP_HOST_SERVER);
      io.on(`quiz${quizId}`, data => {
        const index = disputes.findIndex(dispute => dispute.id === data.id);

        if (index !== -1) {
          return setDisputes(
            disputes.map(item =>
              item.id === data.id ? { ...item, score: data.score } : item
            )
          );
        }

        setDisputes([...disputes, data]);
      });
    }
    subscribeToEvents();
    return () => {
      io.close();
    };
  }, [disputes, quizId]);

  return (
    <Container>
      {disputes.length > 0 ? (
        disputes.map(dispute => (
          <div id="dispute" key={dispute.id}>
            {nameVisible &&
              (dispute.User ? (
                <h4> {dispute.User.name} </h4>
              ) : (
                <h4> {dispute.UnloggedUser.name} </h4>
              ))}
            <ProgressBar
              key={dispute.id}
              score={dispute.score}
              total={props.total}
            />
            <button onClick={() => setNameVisible(!nameVisible)}>
              {nameVisible ? "Ocultar nomes" : "Mostrar nomes"}
            </button>
          </div>
        ))
      ) : (
        <h3>Nenhuma partida iniciada. Aguarde...</h3>
      )}
    </Container>
  );
}
