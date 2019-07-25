import React from "react";
import {
  Menu,
  DivLogo,
  AppLogo,
  NomeSite,
  List,
  ItemList,
  LinkMenu,
  IconHome,
  IconSubject,
  IconQuestion,
  IconQuiz,
  IconSettings,
  Linha
} from "./styles";
import logo from "../../assets/img/logo-verde.png";
import { withRouter } from "react-router-dom";

function SideMenu(props) {
  return (
    <Menu sideMenu={props.sideMenu}>
      <DivLogo>
        <AppLogo src={logo} />
        {props.sideMenu && <NomeSite>Quest On</NomeSite>}
      </DivLogo>
      <List>
        <LinkMenu exact={true} to={`${props.match.path}`}>
          <ItemList>
            <IconHome />
            {props.sideMenu && "Início"}
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/d`}>
          <ItemList>
            <IconSubject />
            {props.sideMenu && "Disciplinas"}
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/qt`}>
          <ItemList>
            <IconQuestion />
            {props.sideMenu && "Questões"}
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/q`}>
          <ItemList>
            <IconQuiz />
            {props.sideMenu && "Questionários"}
          </ItemList>
        </LinkMenu>
        <Linha />
        <LinkMenu to={`${props.match.path}/c`}>
          <ItemList>
            <IconSettings />
            {props.sideMenu && "Configurações"}
          </ItemList>
        </LinkMenu>
      </List>
    </Menu>
  );
}

export default withRouter(SideMenu);
