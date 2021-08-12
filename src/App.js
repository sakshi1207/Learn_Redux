
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment,decrement} from "./Actions";

function App() {
const counter = useSelector(state => state.counter)
const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();
// we are using redux bcoz we dont hv to import everything in app file , we automatically call this will same time and space

  return (
    <>
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() =>dispatch(increment())}>+</button>
        <button onClick={() =>dispatch(decrement())}>-</button>
        {isLogged ? <h3>for authorized person only</h3> : " "}

      </div>
    </>
  );
}

export default App;
