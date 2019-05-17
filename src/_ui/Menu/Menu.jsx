import React from "react";
import MuiMenu from "@material-ui/core/Menu";

export default function Menu({ anchor, onClose, children, ...rest }) {
  return (
    <MuiMenu
      disableAutoFocusItem
      anchorEl={anchor}
      open={Boolean(anchor)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      {...rest}
      onClose={() => onClose(null)}
    >
      {children}
    </MuiMenu>
  );
}
