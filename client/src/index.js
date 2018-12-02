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
import "rheostat/css/rheostat.css";
import "react-dates/lib/css/_datepicker.css";

//Styling for the rheostat price picker in filter
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import RheostatDefaultTheme from "rheostat/lib/themes/DefaultTheme";
import ReactDatesDefaultTheme from "react-dates/lib/theme/DefaultTheme";

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
  rheostat: {
    ...RheostatDefaultTheme.rheostat,
    color: {
      ...RheostatDefaultTheme.rheostat.color,
      progressBar: "#BE1E2D"
    }
  },
  ...ReactDatesDefaultTheme
});

// console.log(store.getState());
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
