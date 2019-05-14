import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
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
    fontFamily: "\"Segoe UI\", \"Chinese Quote\", Tahoma, SansSerif, sans-serif",
    fontSize: 12
  },
  shape: {
    borderRadius: 6
  }
});

class ThemeProvider extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
