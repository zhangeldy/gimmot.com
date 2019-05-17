import React from "react";
import MuiMenu from "@material-ui/core/Menu";

export default function Menu({ anchor, onClose, children, ...rest }) {
  return (
    <MuiMenu
      anchorEl={anchor}
      open={Boolean(anchor)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      {...rest}
      onClose={() => onClose(null)}
    >
      {children}
    </MuiMenu>
  );
}
