import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import  {Theme} from './theme'

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={Theme}>
      <Router/>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
