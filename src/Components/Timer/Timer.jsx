import React, { useState } from 'react'
import Counter from './Counter';
const Timer = () => {
    const [isShow, setIsShow] = useState(true);
    const clickHandler = () =>{
        setIsShow(prevState => !prevState);
    }
    return ( 
        <div>
            <button onClick={clickHandler}>
                {isShow ? 'hide' : 'show'}
            </button>
            {isShow ? <Counter /> : null}
        </div>
     );
}
 
export default Timer;