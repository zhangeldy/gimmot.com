import React from "react";
import { Button as MuiButton } from "@material-ui/core";

function Button({ text, icon, ...rest }) {
  let style = {};

  if (rest.size === "small") {
    style.padding = "4px 16px";
    style.fontSize = "12px";
    style.textTransform = "inherit";
  }

  return (
    <MuiButton style={style} variant="contained" color="primary" {...rest}>
      {icon}
      {text}
    </MuiButton>
  );
}

export default Button;
