import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { CssBox } from "./ToolbarStyle";
import Logo from "../../_media/logo40x40.png";
import ToolbarMenu from "./ToolbarMenu";
import InheritButton from "../../_ui/Button/InheritButton";
import routers from "../../_helpers/routers";
import withTranslation from "../../_hoc/withTranslation";
import { history } from "../../_helpers/store";
import IFAuth from "../IFAuth";

function Toolbar({ user, t }) {
  return (
    <CssBox>
      <div style={{ width: "calc(100vw - 20px)" }}>
        <MuiToolbar variant="dense" className="content-width">
          <Link className="logo" to={routers.advertsPage.path}>
            <img src={Logo} alt="logotype" />
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
