import React from "react";
import { Switch, Route } from "react-router-dom";

import List from "./List";
import Quiz from "./Quiz";
import NewQuiz from "./NewQuiz";

export default function Questionarios(props) {
  return (
    <Switch>
      <Route exact path={`${props.match.path}/`} component={List} />
      <Route exact path={`${props.match.path}/:id`} component={Quiz} />
      <Route path={`${props.match.path}/q/new`} component={NewQuiz} />
    </Switch>
  );
}
