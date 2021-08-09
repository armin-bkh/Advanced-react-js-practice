import React, { useState, Component } from "react";

const WithCounter = (WrappedComponent, defValue) => {
  const UpdatedComponent = (props) => {
    const [counter, setCounter] = useState(0);
    const incrementHandler = () => {
      setCounter((prevState) => prevState + defValue);
    };
    return (
      <WrappedComponent
        counter={counter}
        onIncrement={incrementHandler}
        {...props}
      />
    );
  };
  return UpdatedComponent;

  // class UpdatedComponent extends Component {
  //     state = { counter: 0 }
  //     incrementHandler = () =>{
  //         this.setState({
  //             counter: this.state.counter + defValue
  //         })
  //     }
  //     render() {
  //         return (
  //         <WrappedComponent counter={this.state.counter} onIncrement={this.incrementHandler} {...this.props} />
  //          );
  //     }
  // }
//   return UpdatedComponent;
};

export default WithCounter;
