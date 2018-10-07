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
    },
    MuiButton: {
      root: {
        fontSize: "1.4rem",
        fontWeight: "500",
        background: "none",
        color: "#BE1E2D",
        "&:hover": {
          boxShadow: "0 0 10px 1px #00000038",
          backgroundColor: "none"
        }
      },
      contained: {
        boxShadow: "none",
        backgroundColor: "#BE1E2D",
        color: "#FFFFFF",
        "&:hover": {
          boxShadow: "0 0 10px 1px #00000038",
          backgroundColor: "#BE1E2D"
        },
        "&$disabled": {
          color: "#FFFFFF"
        }
      },
      outlined: {
        border: "#BE1E2D .1rem solid",
        "&$disabled": {
          border: "#e0e0e0 .1rem solid"
        }
      }
    },
      typography: {
    fontFamily: ['Cereal']
  },

  },
  }
});

    