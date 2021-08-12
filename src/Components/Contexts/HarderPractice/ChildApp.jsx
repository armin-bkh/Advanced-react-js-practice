import React, { useContext } from 'react';
import { Context, ContextDispatcher, useCount, useCountAction } from './ContextProvider';

const ChildApp = () => {
    // const count = useContext(Context);
    // const setCount = useContext(ContextDispatcher);
    const count = useCount();
    const {increment, decrement , reset} = useCountAction();
    return ( 
        <div>
            <h2>{count}</h2>
            <button onClick={()=> increment(1)}>increment one</button>
            <button onClick={()=> decrement(1)}>decrement one</button>
            <button onClick={reset}>reset</button>
        </div>
     );
}
 
export default ChildApp;