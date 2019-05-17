import React from "react";
import MuiToolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { CssBox } from "./ToolbarStyle";
import Logo from "../../_media/logo40x40.png";
import ToolbarMenu from "./ToolbarMenu";
import Button from "../../_ui/Button/Button";

function Toolbar({ homePagePath, user }) {
  return (
    <CssBox>
      <AppBar position="static" elevation={0}>
        <MuiToolbar variant="dense" className="content-width">
          <Link className="logo" to={homePagePath}>
            <img src={Logo} alt="logotype" />
          </Link>
          {user
            ? <ToolbarMenu />
            : <Button color="inherit" variant="inherit" text="Войти"/>
          }
        </MuiToolbar>
      </AppBar>
    </CssBox>
  );
}

export default Toolbar;
