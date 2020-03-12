import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Routes from "./components/Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
