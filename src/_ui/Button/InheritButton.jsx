import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function InheritButton({ text, ...rest }) {
  return (
    <MuiButton color="inherit" {...rest}>
      {text}
    </MuiButton>
  );
}
