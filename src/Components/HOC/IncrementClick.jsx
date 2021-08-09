import React, { useState } from 'react'
import WithCounter from './WithCounter';

const Click = (props) => {
    return ( 
        <button onClick={props.onIncrement}>
            {props.title}: {props.counter} {props.name}
        </button>
     );
}
 
export default WithCounter(Click, 20);