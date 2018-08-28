import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

const logger = store => next => action => {
  console.log("%cRedux:", "color: #336699; font-weight: bold;", action.type);
  let result = next(action);
  return result;
};

export default function configureStore() {
  return createStore(reducer, applyMiddleware(logger));
}
