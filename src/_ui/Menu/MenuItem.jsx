import React from "react";
import MuiMenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function MenuItem({ icon, children, text, ...rest }) {
  return (
    <MuiMenuItem style={{ paddingTop: 3, paddingBottom: 3 }} {...rest}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {text || children}
    </MuiMenuItem>
  );
}

export default MenuItem;
