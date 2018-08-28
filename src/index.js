import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import ActionExecutor from "action-executor/lib/ActionExecutor";
import IncrementCountAction from "./actions/IncrementCountAction";

const services = {};

services.store = configureStore();

services.actionExecutor = new ActionExecutor({
  context: {
    ...services,
    actionExecutor: undefined
  }
});

setTimeout(() => {
  services.actionExecutor.enqueue(new IncrementCountAction());
}, 2000);

ReactDOM.render(
  <Provider store={services.store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
