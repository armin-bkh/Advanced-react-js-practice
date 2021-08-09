import React, { useState } from 'react'
import WithCounter from './WithCounter';

const Hover = (props) => {
    return ( 
        <h1 onMouseOver={props.onIncrement}>
            {props.title}: {props.counter}
        </h1>
     );
}
 
export default WithCounter(Hover, 10);