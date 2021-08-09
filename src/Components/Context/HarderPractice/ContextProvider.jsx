import React, { useContext, useState } from "react";
export const Context = React.createContext();
export const ContextDispatcher = React.createContext();

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Context.Provider value={count}>
      <ContextDispatcher.Provider value={setCount}>
          {children}
          </ContextDispatcher.Provider>
    </Context.Provider>
  );
};

export default ContextProvider;

export const useCount = () => useContext(Context);
export const useCountAction = () => {
    const setCount = useContext(ContextDispatcher);
    const incrementOne = () =>{
        setCount(prevState => prevState + 1)
    }
    const incrementFive = () =>{
        setCount(prevState => prevState + 5)
    }
    const decrementOne = () =>{
        setCount(prevState => prevState - 1)
    }
    const decrementFive = () =>{
        setCount(prevState => prevState - 5)
    }
    return { incrementOne, incrementFive, decrementOne, decrementFive }
};