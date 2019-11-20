import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import api from "../../../service/api";
import { Container } from "./styles";

import noDataImg from "../../../assets/img/no_data.svg";

export default function Home(props) {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      document.title = "Quest On";
      const { data } = await api.get(`/teacher/statistics`);

      const listTops = data.tops.map(user => {
        return {
          Pontuacão: user.scoreAll,
          name: user.User.name
        };
      });

      // const listAverage = data.averageQuizzes.map(quiz => {
      //   return {
      //     name: quiz.Quiz.name,
      //     Pontuação: parseFloat(quiz.average)
      //   };
      // });

      // const answersResult = [
      //   { name: "Acerto", value: data.answersStats.hit },
      //   { name: "Erro", value: data.answersStats.error },
      //   { name: "Pulo", value: data.answersStats.skip }
      // ];

      await setTops(listTops);

      // await setAverage(listAverage);

      // await setAnswers(answersResult);
    };

    fetchData();
  }, [props.match.params]);
  return (
    <Container>
      {tops.length > 0 ? (
        <div className="graphics">
          <h2>Melhores pontuadores</h2>
          <BarChart
            width={500}
            height={300}
            data={tops}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Pontuacão" fill="#8FC52E" />
          </BarChart>
        </div>
      ) : (
        <div id="notData">
          <h2>Ainda sem estatísticas</h2>
          <img src={noDataImg} alt="no data"></img>
        </div>
      )}
    </Container>
  );
}
