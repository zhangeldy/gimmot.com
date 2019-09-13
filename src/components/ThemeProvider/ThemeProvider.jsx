import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Wrapper } from './Styles';

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </MuiThemeProvider>
  );
}
