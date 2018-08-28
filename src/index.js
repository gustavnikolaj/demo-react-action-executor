import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import ActionExecutor from "action-executor/lib/ActionExecutor";
import IncrementCountAction from "./actions/IncrementCountAction";
import { ActionExecutorProvider } from "./react-action-executor";

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
  <ActionExecutorProvider value={services.actionExecutor}>
    <Provider store={services.store}>
      <App />
    </Provider>
  </ActionExecutorProvider>,
  document.getElementById("root")
);
