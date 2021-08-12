import { useReducer } from "react";

const initialState = 0;

const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return currState + action.value;
    case "decrement":
      return currState - action.value;
    case "addFive":
      return currState + action.value;
    case "reset":
      return initialState;
    default:
      return currState;
  }
};
const CounterApp = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>{countOne}</h1>
        <button onClick={() => dispatchOne({type: 'increment', value: 1})}>increment</button>
        <button onClick={() => dispatchOne({type: 'decrement', value: 1})}>decrement</button>
        <button onClick={() => dispatchOne({type: 'addFive', value: 5})}>addFive</button>
        <button onClick={() => dispatchOne({type: 'reset'})}>reset</button>
      </div>
      <div>
        <h1>{countTwo}</h1>
        <button onClick={() => dispatchTwo({type: 'increment', value: 2})}>increment</button>
        <button onClick={() => dispatchTwo({type: 'decrement', value: 2})}>decrement</button>
        <button onClick={() => dispatchTwo({type: 'addFive', value: 5})}>addFive</button>
        <button onClick={() => dispatchTwo({type: 'reset'})}>reset</button>
      </div>
    </div>
  );
};

export default CounterApp;
