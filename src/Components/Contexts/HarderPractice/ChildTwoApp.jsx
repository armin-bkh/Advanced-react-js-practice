import { useCount, useCountAction } from "./ContextProvider";

const ChildTwoApp = () => {
    const count = useCount();
    const { increment, decrement, reset } = useCountAction();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> increment(5)}>incrementOne</button>
      <button onClick={()=> decrement(2)}>decrementOne</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ChildTwoApp;
