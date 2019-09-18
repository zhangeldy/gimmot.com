import React from "react";
import { Button as MuiButton } from "@material-ui/core";

function Button({ text, icon, ...rest }) {

  return (
    <MuiButton variant="contained" color="primary" {...rest}>
      {icon}
      {text}
    </MuiButton>
  );
}

export default Button;
