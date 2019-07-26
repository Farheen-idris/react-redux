import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Action";
import { decrement } from "./Action";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? (
        <h3>Valuable information i shouldn't see</h3>
      ) : (
        <h3>IT IS WORKING!!!!</h3>
      )}
    </div>
  );
}

export default App;
