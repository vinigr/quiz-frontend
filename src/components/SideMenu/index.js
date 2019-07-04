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

export default function SideMenu(props) {
  return (
    <Menu>
      <AppLogo src={logo} />
      <List>
        <LinkMenu exact={true} to="/teacher">
          <ItemList>
            <IconHome />
            Início
          </ItemList>
        </LinkMenu>
        <LinkMenu to="/teacher/disciplinas">
          <ItemList>
            <IconSubject />
            Disciplinas
          </ItemList>
        </LinkMenu>
        <LinkMenu to="/teacher/questionarios">
          <ItemList>
            <IconQuestion />
            Questionários
          </ItemList>
        </LinkMenu>
        <Linha />
        <LinkMenu>
          <ItemList>
            <IconSettings />
            Configurações
          </ItemList>
        </LinkMenu>
      </List>
    </Menu>
  );
}
