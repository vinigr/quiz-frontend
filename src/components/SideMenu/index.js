import React from "react";
import {
  Menu,
  AppLogo,
  List,
  ItemList,
  LinkMenu,
  IconHome,
  IconSubject,
  IconQuestion,
  IconSettings,
  Linha
} from "./styles";
import logo from "../../assets/img/logo-verde.png";
import { withRouter } from "react-router-dom";

function SideMenu(props) {
  return (
    <Menu>
      <AppLogo src={logo} />
      <List>
        <LinkMenu exact={true} to={`${props.match.path}`}>
          <ItemList>
            <IconHome />
            Início
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/d`}>
          <ItemList>
            <IconSubject />
            Disciplinas
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/q`}>
          <ItemList>
            <IconQuestion />
            Questionários
          </ItemList>
        </LinkMenu>
        <Linha />
        <LinkMenu to={`${props.match.path}/c`}>
          <ItemList>
            <IconSettings />
            Configurações
          </ItemList>
        </LinkMenu>
      </List>
    </Menu>
  );
}

export default withRouter(SideMenu);
