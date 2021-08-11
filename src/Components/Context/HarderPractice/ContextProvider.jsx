import React, { useContext, useState, useReducer } from "react";
export const Context = React.createContext();
export const ContextDispatcher = React.createContext();

const initialState = 0;
const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return currState + action.value;
    case "decrement":
      return currState - action.value;
    case "reset":
      return initialState;
    default:
      return currState;
  }
};
const ContextProvider = ({ children }) => {
  //   const [count, setCount] = useState(0);
  const [count, disPatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={count}>
      <ContextDispatcher.Provider value={disPatch}>
        {children}
      </ContextDispatcher.Provider>
    </Context.Provider>
  );
};

export default ContextProvider;

export const useCount = () => useContext(Context);
export const useCountAction = () => {
  const disPatch = useContext(ContextDispatcher);
  const incrementOne = () => {
    disPatch({type: 'increment', value: 1});
  };
  const decrementOne = () => {
    disPatch({type: 'decrement', value: 1});
  };
  const reset = () => {
    disPatch({type: 'reset'});
  };
  return { incrementOne, decrementOne, reset };
};
