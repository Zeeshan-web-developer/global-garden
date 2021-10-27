/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-25 07:41:34
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 21:38:29
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Update from "./Update";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/update/:id">
          <Update />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
