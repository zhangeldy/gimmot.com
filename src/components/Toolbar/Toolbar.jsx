import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { CssBox } from "./ToolbarStyle";
import Logo from "../../_media/logo40x40.png";

function Toolbar({ homePagePath }) {
  return (
    <CssBox>
      <AppBar position="static" elevation={0}>
        <MuiToolbar variant="dense">
          <div className="content-width">
            <Link className="logo" to={homePagePath}>
              <img src={Logo} alt="logotype" />
            </Link>
          </div>
        </MuiToolbar>
      </AppBar>
    </CssBox>
  );
}

export default Toolbar;
