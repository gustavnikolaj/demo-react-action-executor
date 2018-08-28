import React from "react";
import { connect } from "react-redux";
import { getCount } from "./store/selectors";
import { incrementCount, decrementCount } from "./store/eventCreators";

const Count = props => (
  <div>
    <h1>Count: {props.count}</h1>
    <p>
      <button onClick={props.incrementCount}>+</button>
      <button onClick={props.decrementCount}>-</button>
    </p>
  </div>
);

export default connect(
  state => ({
    count: getCount(state)
  }),
  { incrementCount, decrementCount }
)(Count);
