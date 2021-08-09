import React, { useState } from 'react';
import ChildApp from './ChildApp';
import ChildTwoApp from './ChildTwoApp';
import ContextProvider from './ContextProvider';

const App = () => {
    return ( 
        <div>
        <ContextProvider>
            <h1>HI THERE</h1>
            <ChildApp />
        </ContextProvider>
        <ContextProvider>
            <h1>HI THERE</h1>
            <ChildTwoApp />
        </ContextProvider>
        </div>
     );
}
 
export default App;