import { createMuiTheme } from '@material-ui/core/styles';

const getTheme = () => {
  let themeType = 'light';
  if (String(window.localStorage.getItem('themeType')) === 'dark') {
    themeType = 'dark';
    window.localStorage.setItem('themeType', 'dark');
  } else {
    window.localStorage.setItem('themeType', themeType);
  }
  let isDark = themeType === 'dark';
  return {
    dark: isDark,
    palette: {
      type: themeType,
      primary: { main: '#3b85a9' },
      secondary: { main: '#e2726f' },
      background: {
        paper: isDark ? '#333336' : '#fff',
        default: isDark ? '#222226' : '#F0F2F5'
      },
      border: {
        default: isDark ? '#444446' : '#d7d8db'
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,Noto Sans Armenian,Noto Sans Bengali,Noto Sans Cherokee,Noto Sans Devanagari,Noto Sans Ethiopic,Noto Sans Georgian,Noto Sans Hebrew,Noto Sans Kannada,Noto Sans Khmer,Noto Sans Lao,Noto Sans Osmanya,Noto Sans Tamil,Noto Sans Telugu,Noto Sans Thai,sans-serif',
      fontSize: 13
    },
    props: {
      MuiMenu: {
        disableAutoFocusItem: true,
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' }
      },
      MuiPopover: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' }
      },
      MuiTooltip: { placement: 'top' },
      MuiButton: { variant: 'contained', color: 'primary', size: 'small' },
      MuiFilledInput: { margin: 'dense' },
      MuiFormControl: { margin: 'dense' },
      MuiIconButton: { size: 'small' },
      MuiInputBase: { margin: 'dense', variant: 'outlined' },
      MuiInputLabel: { margin: 'dense' },
      MuiListItem: { dense: true },
      MuiOutlinedInput: { margin: 'dense' },
      MuiFab: { size: 'small' },
      MuiTable: { size: 'small' },
      MuiTextField: {
        margin: 'dense',
        variant: 'outlined',
        fullWidth: true,
        autoComplete: 'off'
      },
      MuiToolbar: { variant: 'dense' },
      MuiPaper: {
        style: {
          boxShadow: isDark ? 'none' : '0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8'
        }
      },
      MuiAppBar: {
        color: isDark ? 'inherit' : 'primary',
        elevation: 0
      }
    },
    overrides: {
      MuiIconButton: {
        sizeSmall: {
          marginLeft: 2,
          marginRight: 2,
          padding: 5
        }
      },
      MuiButton: {
        label: {
          textTransform: 'none'
        }
      }
    }
  };
};

export const theme = createMuiTheme(getTheme());
