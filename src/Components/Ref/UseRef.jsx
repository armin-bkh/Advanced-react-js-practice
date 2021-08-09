import React, { useState, useRef, useEffect } from 'react'

// const FInpFocus = () => {
//     const [inputValue, setInputValue] = useState('');
//     const inputRef = useRef();
//     const prevValue = useRef();
//     useEffect(()=>{
//         prevValue.current = inputValue;
//     }, [inputValue])

//     const clickHandler = () =>{
//         inputRef.current.focus();
//         setInputValue('');
//     }
//     const changeHandler = (e) =>{
//         setInputValue(e.target.value)
//     }
//     return ( 
//         <div>
//             <input ref={inputRef} type="text" value={inputValue} onChange={changeHandler} />
//             <p>last yout type: {prevValue.current}</p>
//             <button onClick={clickHandler}>
//                 submit
//             </button>
//         </div>
//      );
// }
 
// export default FInpFocus;


const Generator = () => {
    const [code, setCode] = useState(null);
    const prevCode = useRef();
    const clickHandler = () =>{
        setCode(Math.ceil(Math.random() * 1000));
    }
    useEffect(()=>{
        prevCode.current = code;
    }, [code])
    
    return ( 
        <div>
            <button type="button" onClick={clickHandler}>Generate</button>
            <p>yourCode is: {code}</p>
            <p>yourLast code is: {prevCode.current}</p>
        </div>
     );
}
 
export default Generator;