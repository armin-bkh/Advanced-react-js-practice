import React, { useContext } from 'react';
import { Context, ContextDispatcher, useCount, useCountAction } from './ContextProvider';

const ChildApp = () => {
    // const count = useContext(Context);
    // const setCount = useContext(ContextDispatcher);
    const count = useCount();
    const { incrementOne, decrementOne, reset } = useCountAction();
    return ( 
        <div>
            <h2>{count}</h2>
            <button onClick={incrementOne}>increment one</button>
            <button onClick={decrementOne}>decrement one</button>
            <button onClick={reset}>reset</button>
        </div>
     );
}
 
export default ChildApp;