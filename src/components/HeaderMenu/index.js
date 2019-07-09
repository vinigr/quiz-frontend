import React, { useState, useEffect } from "react";
import {
  Header,
  IconMenu,
  OpcoesDisciplina,
  OpcaoDisciplina,
  NomeOpcao,
  IconNotificacoes
} from "./styles";

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
          <OpcaoDisciplina to={`/t/d/${location[3]}/m`}>
            <NomeOpcao>Mural</NomeOpcao>
          </OpcaoDisciplina>
          <OpcaoDisciplina to={`/t/d/${location[3]}/p`}>
            <NomeOpcao>Pessoas</NomeOpcao>
          </OpcaoDisciplina>
        </OpcoesDisciplina>
      ) : (
        <></>
      )}

      <IconNotificacoes />
    </Header>
  );
}

// export default withRouter(HeaderMenu);
