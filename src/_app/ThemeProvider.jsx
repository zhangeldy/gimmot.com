import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "react-table/react-table.css";
import "../_css/style.scss";
import "../_css/basscss.min.css";
import "react-notifications/lib/notifications.css";
import Color from "../_helpers/Color";

const theme = createMuiTheme({
  palette: {
    primary: { main: Color.primary }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Segoe UI", "Chinese Quote", Tahoma, SansSerif, sans-serif',
    fontSize: 13
  }
});

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
