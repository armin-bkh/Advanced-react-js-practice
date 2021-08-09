import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    useEffect(()=>{
        document.title = `clicked: ${counter} times`;  
        console.log('clicked');
    }, [counter])
    useEffect(()=>{
        console.log("useEffect practice component Mounted");  
    }, [])
    useEffect(()=>{
        console.log(value)
    }, [value])

    const clickHandler = () =>{
        setCounter(prevState => prevState + 1);
    }
    const changeHandler = (e) =>{
        setValue(e.target.value);    
    }
    return ( 
        <div>
            <input type="text" value={value} onChange={changeHandler} />
            <button onClick={clickHandler}>count: {counter}</button>
        </div>
     );
}
 
export default Counter;