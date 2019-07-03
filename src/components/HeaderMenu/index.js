import React from "react";
import { MdNotifications } from "react-icons/md";
import { Header } from "./styles";

export default function HeaderMenu() {
  return (
    <Header>
      <MdNotifications size={28} />
    </Header>
  );
}
