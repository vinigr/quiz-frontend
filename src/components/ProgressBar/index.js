import React from "react";

import { Container } from "./styles";

export default function ProgressBar({ score, total, color }) {
  const percentage = `${(score / total) * 100}%`;

  return (
    <Container percentage={percentage} color={color}>
      <div className="bar">
        <span>{score}</span>
      </div>
    </Container>
  );
}
