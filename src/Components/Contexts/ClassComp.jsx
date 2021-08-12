import React, { Component } from 'react';
import ChildComp from './ChildComp';

export const UserContext = React.createContext();
export const WebsiteContext = React.createContext();

class ClassComp extends Component {
    state = { 
        userName: "Armin",
        webName: "Shopping App",
     }
    render() { 
        return ( 
            <UserContext.Provider value={this.state.userName}>
                <WebsiteContext.Provider value={this.state.webName}>
                <h1>hi there</h1>
                <ChildComp />
                </WebsiteContext.Provider>
            </UserContext.Provider>
         );
    }
}
 
export default ClassComp;