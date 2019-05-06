import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import classNames from "classnames";


function Header({ SideBarIsOpen ,classes,SideBarOpen}) {
  return (
    <>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: SideBarIsOpen
        })}
      >
        <Toolbar disableGutters={!SideBarIsOpen}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={SideBarOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: SideBarIsOpen
            })}
          >
            <MenuIcon/>
          </IconButton>
            <div className= " col col-12">
              <div className="col col-6 ">
                <span >Телеком</span>
              </div>
              <div className="pr3 col col-6  flex justify-end ">
                <span className="mr1">Нурбеков Жайык</span>

                <AccountCircle style={{ color: "#FFFFFF" }} className="ml2"/>

              </div>
            </div>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
