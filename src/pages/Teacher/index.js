import React from "react";
import { Container } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import SideMenu from "../../components/SideMenu";

export default function Teacher() {
  return (
    <Container>
      <SideMenu />
      <HeaderMenu />
    </Container>
  );
}
