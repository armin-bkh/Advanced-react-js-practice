import React, { Component, createRef } from 'react'
import InputC from './InputC';

class InpFocus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue: ''
         }
        this.prevInpVal = createRef();
        this.inputRef = createRef();
    }

    changeHandler = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    }
    clickHandler = () =>{
        this.setState({
            inputValue: ''
        })
        this.inputRef.current.focus();
    }
    componentDidUpdate(prevProps, prevState) {
        this.prevInpVal.current = this.state.inputValue;
    }
    
    render() { 
        return ( 
            <div>
                <input ref={this.inputRef} type="text" value={this.state.inputValue} onChange={this.changeHandler} />
                <p>your last value is: {this.prevInpVal.current}</p>
                <button type="button" onClick={this.clickHandler}>submit</button>
            </div>
         );
    }
}
export default InpFocus;


// class InpFocus extends Component {
//     constructor(props) {
//         super(props);
//         this.Component = createRef();
//     }
//     clickHandler = () =>{
//         this.Component.current.focusHandler();
//     }
    
//     render() { 
//         return ( 
//             <div>
//                 <InputC ref={this.Component} />
//                 <button type="button" onClick={this.clickHandler}>submit</button>
//             </div>
//          );
//     }
// }
 
// export default InpFocus;