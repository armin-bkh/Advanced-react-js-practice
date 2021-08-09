import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'
import RegFcomp from './RegFComp'

class ParentComp extends Component {
    state = { 
        name: "Armin"
     }
     componentDidMount() {
         setInterval(()=>{
            this.setState({
                name: "Armin",
            })
         }, 4000)
     }
     
    render() { 
        console.log('Parent Comp');
        return ( 
            <div>
                Parent Component
                <PureComp name={this.state.name} />
                <RegComp name={this.state.name} />
                <MemoComp name={this.state.name} />
                <RegFcomp name={this.state.name} />
            </div>
         );
    }
}
 
export default ParentComp;