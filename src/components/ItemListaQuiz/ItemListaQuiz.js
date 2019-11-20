import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Item, LinkQuiz } from "./styles";

import api from "../../service/api";

const ItemListaQuiz = props => {
  const [blocked, setBlocked] = useState(props.quiz.blocked);

  async function handleBlocked(e) {
    try {
      await api.get(`switchBlockedQuiz/${props.quiz.id}`);
      setBlocked(!blocked);
    } catch (error) {}
  }

  return (
    <Item>
      <LinkQuiz
        to={{
          pathname: `${props.match.url}/n/${props.quiz.id}`,
          state: {
            quiz: props.quiz
          }
        }}
      >
        <div id="name">
          <h3>{props.quiz.name}</h3>
        </div>
      </LinkQuiz>
      <div id="last-items">
        <FormControlLabel
          style={{ flexDirection: "row-reverse" }}
          control={
            <Switch
              checked={blocked}
              onChange={handleBlocked}
              value="hasCode"
              color="primary"
            />
          }
          label="Bloqueado"
          labelPlacement="start"
        />
        <h3 id="code" title="Código do quiz">
          {props.quiz.accessCode}
        </h3>
      </div>
    </Item>
  );
};

export default ItemListaQuiz;
