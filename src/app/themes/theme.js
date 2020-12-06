import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import lime from "@material-ui/core/colors/lime";
import lightBlue from "@material-ui/core/colors/lightBlue";

export const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
  status: {
    danger: "orange",
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: lime,
    secondary: lightBlue,
  },
  status: {
    danger: "orange",
  },
});
