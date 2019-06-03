import React, { useState } from "react";
import MenuItem from "../../_ui/Menu/MenuItem";
import Menu from "../../_ui/Menu/Menu";
import withTranslation from "../../_hoc/withTranslation";
import AccountIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import IconButton from "../../_ui/Button/IconButton";

function ToolbarMenu({ t }) {
  const [anchor, setAnchor] = useState(null);
  const menuItems = [
    { text: t("toolbarMenu_profile"), path: "/profile", icon: AccountIcon },
    { text: t("toolbarMenu_settings"), path: "/settings", icon: SettingsIcon },
  ];
  return (
    <div>
      <IconButton
        color="inherit"
        onClick={ev => setAnchor(ev.currentTarget)}
        icon={<AccountIcon />}
      />
      <Menu anchor={anchor} style={{ marginTop: 35 }} onClose={setAnchor}>
        {menuItems.map(({ text, path, icon: Icon }) => (
          <Link to={path} key={path} onClick={() => setAnchor(null)}>
            <MenuItem icon={<Icon style={{ fontSize: 17 }} />}>{text}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

export default withTranslation(ToolbarMenu);
