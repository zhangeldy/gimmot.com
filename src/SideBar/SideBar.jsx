import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Place";
import { styles } from "./SideBarStyles";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import routers from "../_helpers/routers";


const SideBar = ({ classes, theme, children }) => {
  const [SideBarIsOpen, setSideBarIsOpen] = useState(true);
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header SideBarIsOpen={SideBarIsOpen} classes={classes} SideBarOpen={() => setSideBarIsOpen(true)}/>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: SideBarIsOpen,
          [classes.drawerClose]: !SideBarIsOpen
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: SideBarIsOpen,
            [classes.drawerClose]: !SideBarIsOpen
          })
        }}
        open={SideBarIsOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setSideBarIsOpen(false)}>
            {theme.direction === "rtl" ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <List style={{width:"100%"}}>
          {routers.filter(item => item.sideBarItem).map((item, index) => (
            <NavLink activeClassName="sd-active" to={item.path} key={index.toString()}>
              <ListItem button key={index.toString()}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        {children}
      </main>
    </div>
  );
};


SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideBar);
