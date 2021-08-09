import React, { Component } from 'react'

class RegComp extends Component {
    render() { 
        console.log('Reg Comp');
        return ( 
            <div name={this.props.name}>
                Reg Comp
            </div>
         );
    }
}
 
export default RegComp;