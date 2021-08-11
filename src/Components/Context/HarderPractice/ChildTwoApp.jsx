import { useCount, useCountAction } from "./ContextProvider";

const ChildTwoApp = () => {
    const count = useCount();
    const {incrementOne, reset, decrementOne} = useCountAction();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementOne}>incrementOne</button>
      <button onClick={decrementOne}>decrementOne</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ChildTwoApp;
