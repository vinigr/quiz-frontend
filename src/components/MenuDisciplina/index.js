import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const MenuDisciplina = ({ handleClose, anchorEl }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Editar</MenuItem>
      <MenuItem onClick={handleClose}>Excluir</MenuItem>
    </Menu>
  );
};

export default MenuDisciplina;
