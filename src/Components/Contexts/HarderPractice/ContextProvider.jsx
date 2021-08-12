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
  const dispatch = useContext(ContextDispatcher);
  const increment = (value) =>{
    dispatch({type: 'increment', value: value})
  }
  const decrement = (value) =>{
    dispatch({type: 'decrement', value: value})
  }
  const reset = () =>{
    dispatch({type: 'reset'})
  }
  return { increment, decrement, reset };
};
