import React, { memo } from 'react'

const MemoComp = (props) => {
    console.log('Memo Comp');
    return ( 
        <div name={props.name}>
            Memo Comp
        </div>
     );
}
 
export default memo(MemoComp);
