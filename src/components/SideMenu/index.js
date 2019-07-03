import React from "react";
import { Menu, AppLogo, List, ItemList } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-verde.png";

export default function SideMenu() {
  return (
    <Menu>
      <AppLogo src={logo} />
      <List>
        <ItemList>
          <Link>
        </ItemList>
      </List>
    </Menu>
  );
}
