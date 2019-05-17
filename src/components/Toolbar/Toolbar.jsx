import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { CssBox } from "./ToolbarStyle";
import Logo from "../../_media/logo40x40.png";
import ToolbarMenu from "./ToolbarMenu";
import Button from "../../_ui/Button/Button";
import { PATHS } from "../../_helpers/routers";
import withTranslation from "../../_hoc/withTranslation";
import { history } from "../../_helpers/store";
import IFAuth from "../IFAuth";

function Toolbar({ user, t }) {
  return (
    <CssBox>
      <AppBar position="static" elevation={0}>
        <MuiToolbar variant="dense" className="content-width">
          <Link className="logo" to={PATHS.homePage}>
            <img src={Logo} alt="logotype" />
          </Link>
          <IFAuth children={<ToolbarMenu />} />
          {!Boolean(user) && (
            <Button
              color="inherit"
              variant="text"
              text={t("toolbar_login")}
              onClick={() => history.push(PATHS.loginPage)}
            />
          )}
        </MuiToolbar>
      </AppBar>
    </CssBox>
  );
}

export default withTranslation(Toolbar);
