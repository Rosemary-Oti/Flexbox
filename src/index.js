import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Flexbox from './Flexbox';
// import MyList from './list/MyList';
import Form from './form';
import reportWebVitals from './reportWebVitals';
// import Navbar from './Navigation/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
     {/* <Navbar /> */}
     {/* <MyList /> */}
     {/* <Flexbox />  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
