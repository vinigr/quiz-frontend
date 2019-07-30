import React from "react";
import {
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

import { IconMenu } from "../HeaderMenu/styles";

import logo from "../../assets/img/logo-verde.png";
import { withRouter } from "react-router-dom";

function SideMenu(props) {
  return (
    <>
      <DivLogo>
        <IconMenu />
        <AppLogo src={logo} />
        <NomeSite>Quest On</NomeSite>
      </DivLogo>
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
        <LinkMenu to={`${props.match.path}/qt`}>
          <ItemList>
            <IconQuestion />
            Questões
          </ItemList>
        </LinkMenu>
        <LinkMenu to={`${props.match.path}/q`}>
          <ItemList>
            <IconQuiz />
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
    </>
  );
}

export default withRouter(SideMenu);
