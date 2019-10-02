import React, { useState, useEffect } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  DivLogoMenu,
  IconMenu,
  AppLogo,
  OpcaoDisciplina,
  NomeOpcao,
  IconExit
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
    <Header location={(location[2] === "d") & !isNaN(location[3])}>
      <div className="top">
        <DivLogoMenu>
          <IconMenu onClick={toggleDrawer("left", true)} />
          <AppLogo src={logo} />
        </DivLogoMenu>
        {(location[2] === "d") & !isNaN(location[3]) ? (
          <div className="options options-top">
            <OpcaoDisciplina exact to={`/t/d/${location[3]}/`}>
              <NomeOpcao>Mural</NomeOpcao>
            </OpcaoDisciplina>
            <OpcaoDisciplina exact to={`/t/d/${location[3]}/p`}>
              <NomeOpcao>Pessoas</NomeOpcao>
            </OpcaoDisciplina>
            <OpcaoDisciplina exact to={`/t/d/${location[3]}/q`}>
              <NomeOpcao>Questionários</NomeOpcao>
            </OpcaoDisciplina>
          </div>
        ) : (
          <></>
        )}
        <IconExit onClick={() => AuthService.logout(props)} />
        <SwipeableDrawer
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {sideList("left")}
        </SwipeableDrawer>
      </div>
      {(location[2] === "d") & !isNaN(location[3]) ? (
        <div className="options options-bottom">
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/`}>
            <NomeOpcao>Mural</NomeOpcao>
          </OpcaoDisciplina>
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/p`}>
            <NomeOpcao>Pessoas</NomeOpcao>
          </OpcaoDisciplina>
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/q`}>
            <NomeOpcao>Questionários</NomeOpcao>
          </OpcaoDisciplina>
        </div>
      ) : (
        <></>
      )}
    </Header>
  );
}
