import React from "react";
import MuiMenuItem from "@material-ui/core/MenuItem";

function MenuItem(props) {
  return (
    <MuiMenuItem style={{ paddingTop: 5, paddingBottom: 5 }} {...props}>
      {props.children}
    </MuiMenuItem>
  );
}

export default MenuItem;
