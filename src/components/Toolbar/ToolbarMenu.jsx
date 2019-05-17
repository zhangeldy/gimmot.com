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

function ToolbarMenu({ t }) {
  const [anchor, setAnchor] = useState(null);
  return (
    <div>
      <IconButton color="inherit" onClick={ev => setAnchor(ev.currentTarget)}>
        <AccountIcon />
      </IconButton>
      <Menu anchor={anchor} style={{ marginTop: 35 }} onClose={setAnchor}>
        <MenuItem icon={<AccountIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_profile")}
        </MenuItem>
        <MenuItem icon={<SettingsIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_settings")}
        </MenuItem>
        <MenuItem icon={<MyAdvertsIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_myAdverts")}
        </MenuItem>
        <MenuItem icon={<FavoriteIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_favorite")}
        </MenuItem>
        <MenuItem icon={<BlackListIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_blackList")}
        </MenuItem>
        <MenuItem icon={<AccessIcon style={{ fontSize: 17 }} />}>
          {t("toolbarMenu_accessPhoto")}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withTranslation(ToolbarMenu);
