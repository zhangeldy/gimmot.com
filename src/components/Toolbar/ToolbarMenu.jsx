import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "../../_ui/Menu/MenuItem";
import Menu from "../../_ui/Menu/Menu";
import withTranslation from "../../_hoc/withTranslation";

function ToolbarMenu({ t }) {
  const [anchor, setAnchor] = useState(null);
  return (
    <div>
      <IconButton color="inherit" onClick={ev => setAnchor(ev.currentTarget)}>
        <AccountCircle />
      </IconButton>
      <Menu anchor={anchor} style={{ marginTop: 35 }} onClose={setAnchor}>
        <MenuItem>{t("toolbarMenu_profile")}</MenuItem>
        <MenuItem>{t("toolbarMenu_settings")}</MenuItem>
        <MenuItem>{t("toolbarMenu_myAdverts")}</MenuItem>
        <MenuItem>{t("toolbarMenu_favorite")}</MenuItem>
        <MenuItem>{t("toolbarMenu_blackList")}</MenuItem>
        <MenuItem>{t("toolbarMenu_accessPhoto")}</MenuItem>
      </Menu>
    </div>
  );
}

export default withTranslation(ToolbarMenu);
