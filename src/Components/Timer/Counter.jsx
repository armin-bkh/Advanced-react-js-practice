import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(()=>{setCounter(prevState => prevState + 1)}, 1000)
        return () => {
            clearInterval(interval)
        };
    }, []);
    return ( 
        <h1>{counter}</h1>
     );
}
 
export default Counter;