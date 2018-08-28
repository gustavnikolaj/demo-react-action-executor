import { INCREMENT, DECREMENT } from "./constants";

export const incrementCount = () => ({ type: INCREMENT });
export const decrementCount = () => ({ type: DECREMENT });
