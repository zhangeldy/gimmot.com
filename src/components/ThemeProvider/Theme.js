import { createMuiTheme } from '@material-ui/core/styles';

const themeType = 'light';
// const themeType = 'dark';

export const theme = createMuiTheme({
  dark: themeType === 'dark',
  palette: {
    type: themeType,
    primary: { main: '#4c8ca9' },
    secondary: { main: '#e2726f' },
    background: {
      paper: themeType === 'dark' ? '#333336' : '#fff',
      default: themeType === 'dark' ? '#222226' : '#F0F2F5',
    },
    border: {
      default: themeType === 'dark' ? '#444446' : '#d7d8db',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '-apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,Noto Sans Armenian,Noto Sans Bengali,Noto Sans Cherokee,Noto Sans Devanagari,Noto Sans Ethiopic,Noto Sans Georgian,Noto Sans Hebrew,Noto Sans Kannada,Noto Sans Khmer,Noto Sans Lao,Noto Sans Osmanya,Noto Sans Tamil,Noto Sans Telugu,Noto Sans Thai,sans-serif',
    fontSize: 13,
  },
  props: {
    MuiButton: { style: { textTransform: 'inherit' } },
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
      inputProps: {
        style: {
          paddingTop: '6.5px',
          paddingBottom: '9.5px',
        },
      },
    },
    MuiToolbar: { variant: 'dense' },
    MuiPaper: {
      style: {
        boxShadow:
          themeType === 'dark'
            ? 'none'
            : '0 1px 0 0 #d7d8db, 0 0 0 1px #e3e4e8',
      },
    },
    MuiAppBar: {
      color: themeType === 'dark' ? 'inherit' : 'primary',
      elevation: 0,
    },
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        marginLeft: 2,
        marginRight: 2,
        padding: 8,
      },
    },
  },
});
