import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#0E0E35',
    },
    primary: {
      light: '#c8dbe4',
      main: '#607d8b',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#99ca8f',
      main: '#577f4e',
      dark: '#3d6b36',
      contrastText: '#fff',
    },
    background: {
      paper: '#FFF',
    },
  },
});
