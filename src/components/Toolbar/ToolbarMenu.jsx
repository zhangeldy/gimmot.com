import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "../../_ui/Menu/MenuItem";
import Menu from "../../_ui/Menu/Menu";

function ToolbarMenu() {
  const [anchor, setAnchor] = useState(null);
  return (
    <div>
      <IconButton color="inherit" onClick={ev => setAnchor(ev.currentTarget)}>
        <AccountCircle />
      </IconButton>
      <Menu anchor={anchor} style={{ marginTop: 35 }} onClose={setAnchor}>
        <MenuItem>Профиль</MenuItem>
        <MenuItem>Настройки</MenuItem>
        <MenuItem>Мои объявления</MenuItem>
        <MenuItem>Избранные</MenuItem>
        <MenuItem>Черный список</MenuItem>
        <MenuItem>Доступ к фотографиям</MenuItem>
      </Menu>
    </div>
  );
}

export default ToolbarMenu;
