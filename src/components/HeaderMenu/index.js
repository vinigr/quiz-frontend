import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  DivLogoMenu,
  IconMenu,
  AppLogo,
  OpcoesDisciplina,
  OpcaoDisciplina,
  NomeOpcao,
  IconNotificacoes,
  IconExit,
  IconsFinal,
  BadgeIcon
} from "./styles";

import SideMenu from "../SideMenu";
import logo from "../../assets/img/logo-verde.png";

import AuthService from "../../service/auth";
const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function HeaderMenu(props) {
  const classes = useStyles();
  const [location, setLocation] = useState([]);
  const [invisible] = useState(false);
  const [state, setState] = useState({
    left: false
  });

  useEffect(() => {
    const { pathname } = props.location;
    setLocation(pathname.split(/\//));
  }, [props]);

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <SideMenu />
    </div>
  );

  return (
    <Header>
      <DivLogoMenu>
        <IconMenu onClick={toggleDrawer("left", true)} />
        <AppLogo src={logo} />
      </DivLogoMenu>

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
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </Header>
  );
}
