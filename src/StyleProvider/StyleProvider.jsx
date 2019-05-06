import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "react-table/react-table.css";
import "../_app/style.scss";
import "../_app/basscss.min.css";
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

class StyleProvider extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default StyleProvider;
