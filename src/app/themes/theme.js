import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import lime from '@material-ui/core/colors/lime';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { grey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[700],
      dark: indigo[900],
    },
    secondary: {
      light: orange[300],
      main: orange[700],
      dark: orange[900],
    },
    background: {
      paper: grey[200],
    },
    greYeah: { // yeah, it is possible to define my own styles
      light: grey[300],
      main: grey[700],
      dark: grey[900],
    },
  },
  status: {
    danger: 'orange',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: lightBlue,
  },
  status: {
    danger: 'orange',
  },
});
