import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

import api from "../../../../service/api";
import { Container } from "./styles";

export default function Mural(props) {
  const [tops, setTops] = useState([]);
  const [average, setAverage] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = props.match.params;
      const { data } = await api.get(`/subject/${id}/statistics`);

      const listTops = data.tops.map(user => {
        return {
          Pontuacão: user.scoreAll,
          name: user.User.name
        };
      });

      const listAverage = data.averageQuizzes.map(quiz => {
        return {
          name: quiz.Quiz.name,
          Pontuação: parseFloat(quiz.average)
        };
      });

      data.answersStats &&
        setAnswers([
          { name: "Acerto", value: data.answersStats.hit },
          { name: "Erro", value: data.answersStats.error },
          { name: "Pulo", value: data.answersStats.skip }
        ]);

      await setTops(listTops);

      await setAverage(listAverage);
    };

    fetchData();
  }, [props.match.params]);

  const COLORS = ["#00C49F", "#ED0F0F", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent * 100 > 0) {
      return (
        <text
          x={x}
          y={y}
          fill="#F5F5F5"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}% `}
          <span>{name}</span>
        </text>
      );
    }
  };

  return (
    <Container>
      {tops.length === 0 && average.length === 0 && answers.length === 0 ? (
        <h2>Ainda sem dados</h2>
      ) : (
        <>
          <div className="graphics">
            <h2>Melhores pontuadores</h2>
            {tops.length > 0 ? (
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
            ) : (
              <h2>Ainda sem estatísticas</h2>
            )}
          </div>
          <div className="graphics">
            <h2>Média de pontos em questionários</h2>
            <LineChart
              width={500}
              height={300}
              data={average}
              margin={{
                top: 5,
                right: 20,
                left: 10,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Pontuação"
                stroke="#FF5733"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
          <div className="graphics">
            <h2>Aproveitamento de questões</h2>
            <PieChart width={250} height={250}>
              <Pie
                data={answers}
                cx={120}
                cy={100}
                label={renderCustomizedLabel}
                labelLine={false}
                outerRadius={80}
                dataKey="value"
              >
                {answers.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>{" "}
        </>
      )}
    </Container>
  );
}
