import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "../../_ui/Menu/MenuItem";
import Menu from "../../_ui/Menu/Menu";
import withTranslation from "../../_hoc/withTranslation";
import AccountIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import MyAdvertsIcon from "@material-ui/icons/ViewDay";
import FavoriteIcon from "@material-ui/icons/Star";
import BlackListIcon from "@material-ui/icons/Block";
import AccessIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

function ToolbarMenu({ t }) {
  const [anchor, setAnchor] = useState(null);
  const menuItems = [
    { text: t("toolbarMenu_profile"), path: "/profile", icon: AccountIcon },
    { text: t("toolbarMenu_settings"), path: "/settings", icon: SettingsIcon },
    { text: t("toolbarMenu_myAdverts"), path: "/myAdverts", icon: MyAdvertsIcon },
    { text: t("toolbarMenu_favorite"), path: "/favorites", icon: FavoriteIcon },
    { text: t("toolbarMenu_blackList"), path: "/blackList", icon: BlackListIcon },
    { text: t("toolbarMenu_accessPhoto"), path: "/photoAccess", icon: AccessIcon }
  ];
  return (
    <div>
      <IconButton
        color="inherit"
        onClick={ev => setAnchor(ev.currentTarget)}
        children={<AccountIcon />}
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
