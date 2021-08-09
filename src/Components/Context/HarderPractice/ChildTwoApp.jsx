import { useCount, useCountAction } from "./ContextProvider";

const ChildTwoApp = () => {
    const count = useCount();
    const {incrementOne, incrementFive, decrementOne, decrementFive} = useCountAction();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementOne}>incrementOne</button>
      <button onClick={incrementFive}>incrementFive</button>
      <button onClick={decrementOne}>decrementOne</button>
      <button onClick={decrementFive}>decrementFIve</button>
    </div>
  );
};

export default ChildTwoApp;
