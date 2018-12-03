import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import { Theme } from "./Theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-dates/lib/css/_datepicker.css";
import {loadDataFromLocalStorage} from "./redux/actions";

store.dispatch(loadDataFromLocalStorage())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={Theme}>
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
