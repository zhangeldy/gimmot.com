import React from "react";
import { Button as MuiButton } from "@material-ui/core"


function Button({ text, ...rest }) {
  return (
    <MuiButton variant="contained" color="primary" {...rest}>
      {text}
    </MuiButton>
  );
}

export default Button;
