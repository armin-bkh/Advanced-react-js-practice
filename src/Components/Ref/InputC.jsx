import React, { Component, createRef, forwardRef, useImperativeHandle, useRef, useState } from "react";

// class InputC extends Component {
//     constructor(){
//         super();
//         this.state = { value: '' }
//         this.inputRef = createRef();
//     }

//     changeHandler = (e) =>{
//         this.setState({value: e.target.value})
//     }

//     focusHandler = () =>{
//         this.inputRef.current.focus();
//     }

//     render() {
//         return (
//             <input ref={this.inputRef} type="text" value={this.state.value} onChange={this.changeHandler} />
//          );
//     }
// }
// export default InputC;

// const InputC = forwardRef((props, ref) => {
//     const [value, setValue] = useState('');
//     const inputRef = useRef();
    
//     useImperativeHandle(ref, ()=>({
//         focusHandler:() =>{
//             inputRef.current.focus();
//         }
//     }), [])
//   return (
//     <input
//       ref={inputRef}
//       type="text"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   );
// });

// export default InputC;
