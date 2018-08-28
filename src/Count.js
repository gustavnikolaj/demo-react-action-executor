import React from "react";
import { connect } from "react-redux";
import { getCount } from "./store/selectors";
import { withActionExecutor } from "./react-action-executor";
import IncrementCountAction from "./actions/IncrementCountAction";
import DecrementCountAction from "./actions/DecrementCountAction";

const Count = props => (
  <div>
    <h1>Count: {props.count}</h1>
    <p>
      <button onClick={props.incrementCount}>+</button>
      <button onClick={props.decrementCount}>-</button>
    </p>
  </div>
);

export default withActionExecutor(
  connect(state => ({
    count: getCount(state)
  }))(Count),
  {
    incrementCount: IncrementCountAction,
    decrementCount: DecrementCountAction
  }
);
