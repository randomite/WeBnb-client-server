import { createMuiTheme } from "@material-ui/core";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#BE1E2D"
    }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        background: "#FFFFFF"
      },
      colorSecondary: {
        backgroundColor: "#FFFFFF00",
        boxShadow: "none"
      }
    },
    MuiDialogContent: {
      root: {
        padding: 24
      }
    },
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: '#BE1E2D'
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: "14px",
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
        border: "#BE1E2D 1px solid",
        "&$disabled": {
          border: "#e0e0e0 1px solid"
        }
      }
    },
    typography: {
      fontFamily: ["Cereal"]
    }
  }
});
