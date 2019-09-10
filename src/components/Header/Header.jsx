import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
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
      <div className="scroll-fix">
        <Toolbar variant="dense" className="content-width">
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
    </CssBox>
  );
}

export default withTranslation(Header);
