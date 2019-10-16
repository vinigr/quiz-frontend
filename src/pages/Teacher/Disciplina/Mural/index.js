import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import api from "../../../../service/api";
import { Container } from "./styles";

export default function Mural(props) {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = props.match.params;
      const { data } = await api.get(`/subject/${id}/statistics`);

      const listTops = data.map(user => {
        return {
          Pontuacão: user.scoreAll,
          name: user.User.name
        };
      });

      await setTops(listTops);
    };

    fetchData();
  }, [props.match.params]);

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={tops}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pontuacão" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
