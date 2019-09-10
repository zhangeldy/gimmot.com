import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { CssBox } from "./HeaderStyle";
import { ReactComponent as LogoIcon } from "../../_media/logo.svg";
import HeaderMenu from "./HeaderMenu";
import InheritButton from "../../_ui/Button/InheritButton";
import withTranslation from "../_hoc/withTranslation";
import { history } from "../../_helpers/history";
import IFAuth from "../IFAuth";
import paths from "../../_helpers/paths";

function Header({ user, t }) {
  return (
    <CssBox>
      <AppBar position="fixed" elevation={0} color="primary">
        <div className="scroll-fix">
        <Toolbar className="content-width">
          <Link className="logo" to={paths.advertsPage}>
            <LogoIcon/>
          </Link>
          <IFAuth children={<HeaderMenu />} />
          {!user && (
            <InheritButton
              text={t("header_login")}
              onClick={() => history.push(paths.loginPage)}
            />
          )}
        </Toolbar>
      </div>
      </AppBar>
    </CssBox>
  );
}

export default withTranslation(Header);
