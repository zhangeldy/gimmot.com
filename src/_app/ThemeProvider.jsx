import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "../_css/style.scss";
import "../_css/basscss.min.css";
import "react-notifications/lib/notifications.css";
import Color from "../_helpers/Color";

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: Color.primary,
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Segoe UI", "Chinese Quote", Tahoma, SansSerif, sans-serif',
    fontSize: 13
  },
  props: {
    // MuiButton: { size: 'small' },
    MuiFilledInput: { margin: 'dense' },
    MuiFormControl: { margin: 'dense' },
    MuiFormHelperText: { style: { margin: 0 } },
    MuiIconButton: { size: 'small' },
    MuiInputBase: { margin: 'dense', variant: 'outlined' },
    MuiInputLabel: { margin: 'dense' },
    MuiListItem: { dense: true },
    MuiOutlinedInput: { margin: 'dense' },
    MuiFab: { size: 'small' },
    MuiTable: { size: 'small' },
    MuiTableCell: { style: { fontSize: 14 } },
    MuiTextField: {
      margin: 'dense',
      variant: 'outlined',
      fullWidth: true,
      autoComplete: 'off',
    }
    // MuiToolbar: { variant: 'dense' },
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        marginLeft: 2,
        marginRight: 2,
        padding: 8
      }
    }
  }
});

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
