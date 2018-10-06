import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#BE1E2D'
    },
  },
  overrides:{
    MuiAppBar : {
      colorDefault: {
        background: '#FFFFFF'
      },
      colorSecondary: {
        backgroundColor: "#FFFFFF00",
        boxShadow: 'none',
      }
    }
  }
});
