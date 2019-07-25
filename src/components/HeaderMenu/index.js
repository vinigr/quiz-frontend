import React, { useState, useEffect } from "react";
import {
  Header,
  IconMenu,
  OpcoesDisciplina,
  OpcaoDisciplina,
  NomeOpcao,
  IconNotificacoes,
  IconExit,
  IconsFinal,
  BadgeIcon
} from "./styles";
import AuthService from "../../service/auth";

export default function HeaderMenu(props) {
  const [location, setLocation] = useState([]);
  const [invisible, setInvisible] = useState(false);

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
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/q`}>
            <NomeOpcao>Questionários</NomeOpcao>
          </OpcaoDisciplina>
        </OpcoesDisciplina>
      ) : (
        <></>
      )}
      <IconsFinal>
        <BadgeIcon color="primary" variant="dot" invisible={invisible}>
          <IconNotificacoes />
        </BadgeIcon>
        <IconExit onClick={() => AuthService.logout(props)} />
      </IconsFinal>
    </Header>
  );
}

// export default withRouter(HeaderMenu);
