import React, { useState, useEffect } from "react";
import {
  Header,
  IconMenu,
  OpcoesDisciplina,
  OpcaoDisciplina,
  NomeOpcao,
  IconNotificacoes,
  IconExit,
  IconsFinal
} from "./styles";
import AuthService from "../../service/auth";

export default function HeaderMenu(props) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const { pathname } = props.location;
    setLocation(pathname.split(/\//));
  }, [props]);

  return (
    <Header>
      <IconMenu onClick={() => props.setSideMenu(!props.sideMenu)} />
      {(location[2] === "d") & !isNaN(location[3]) ? (
        <OpcoesDisciplina>
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/`}>
            <NomeOpcao>Mural</NomeOpcao>
          </OpcaoDisciplina>
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/p`}>
            <NomeOpcao>Pessoas</NomeOpcao>
          </OpcaoDisciplina>
        </OpcoesDisciplina>
      ) : (
        <></>
      )}
      <IconsFinal>
        <IconNotificacoes />
        <IconExit onClick={() => AuthService.logout(props)} />
      </IconsFinal>
    </Header>
  );
}

// export default withRouter(HeaderMenu);
