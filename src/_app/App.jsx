import React from "react";
import { Provider } from "react-redux";
import { store } from "../_helpers/store";
import { history } from "../_helpers/history";
import LocaleProvider from "../components/LocaleProvider/LocaleProvider";
import ThemeProvider from "./ThemeProvider";
import Root from "./Root";
import { Router } from 'react-router-dom';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LocaleProvider>
          <ThemeProvider>
            <Root/>
          </ThemeProvider>
        </LocaleProvider>
      </Router>
    </Provider>
  );
}
