import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
// import App from './Components/Context/HarderPractice/App';
// import CounterApp from './Components/Reducer/Counter';
// import ClassComp from './Components/Context/ClassComp';
// import IncrementClick from './Components/HOC/IncrementClick';
// import IncrementHover from './Components/HOC/IncrementHover';
// import ParentComp from './Components/pure&memo/ParentComp';
// import Counter from './Components/Counter/Counter';
// import Timer from './Components/Timer/Timer';
// import InpFocus from './Components/Ref/CreateRef';
// import FInpFocus from './Components/Ref/UseRef';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Counter /> */}
    {/* <Timer /> */}
    {/* <IncrementClick title="Click me:" name="Armin"/>
    <IncrementHover title="hover on me"/> */}
    {/* <ParentComp /> */}
    {/* <InpFocus /> */}
    {/* <FInpFocus /> */}
    {/* <ClassComp /> */}
    {/* <App /> */}
    {/* <CounterApp /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
