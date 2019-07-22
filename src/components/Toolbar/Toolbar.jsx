import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { CssBox } from "./ToolbarStyle";
import { ReactComponent as LogoIcon } from "../../_media/logo.svg";
import ToolbarMenu from "./ToolbarMenu";
import InheritButton from "../../_ui/Button/InheritButton";
import routers from "../../_helpers/routers";
import withTranslation from "../_hoc/withTranslation";
import { history } from "../../_helpers/history";
import IFAuth from "../IFAuth";

function Toolbar({ user, t }) {
  return (
    <CssBox>
      <div className="scroll-fix">
        <MuiToolbar variant="dense" className="content-width">
          <Link className="logo" to={routers.advertsPage.path}>
            <LogoIcon/>
          </Link>
          <IFAuth children={<ToolbarMenu />} />
          {!user && (
            <InheritButton
              text={t("toolbar_login")}
              onClick={() => history.push(routers.loginPage.path)}
            />
          )}
        </MuiToolbar>
      </div>
    </CssBox>
  );
}

export default withTranslation(Toolbar);
