import React, { useState, useEffect } from "react";
import { SwipeableDrawer, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  DivLogoMenu,
  IconMenu,
  AppLogo,
  OpcaoDisciplina,
  NomeOpcao
} from "./styles";

import SideMenu from "../SideMenu";
import Avatar from "../Avatar";
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
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <OpcaoDisciplina to={`/t/d/${location[3]}/qt`}>
              <NomeOpcao>Questões</NomeOpcao>
            </OpcaoDisciplina>
            <OpcaoDisciplina exact to={`/t/d/${location[3]}/q`}>
              <NomeOpcao>Questionários</NomeOpcao>
            </OpcaoDisciplina>
          </div>
        ) : (
          <></>
        )}
        <Avatar handleClick={handleClick} />
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
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/qt`}>
            <NomeOpcao>Questões</NomeOpcao>
          </OpcaoDisciplina>
          <OpcaoDisciplina exact to={`/t/d/${location[3]}/q`}>
            <NomeOpcao>Questionários</NomeOpcao>
          </OpcaoDisciplina>
        </div>
      ) : (
        <></>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={() => AuthService.logout(props)}>Sair</MenuItem>
      </Menu>
    </Header>
  );
}
