import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() { 
        console.log('Pure Comp');
        return ( 
            <div name={this.props.name}>
                Pure Comp
            </div>
         );
    }
}
 
export default PureComp;