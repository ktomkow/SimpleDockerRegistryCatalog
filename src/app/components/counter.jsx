import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
} from "../redux/slices/counterSlice";

const Counter = (props) => {
  const countValue = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Counter: {countValue}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
