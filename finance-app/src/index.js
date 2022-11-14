import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// imports the html code from the App.js file
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// imports the Chart function from the /Scripts/Chart.js file
import Chart from './Scripts/Chart'

/* eslint-disable */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Runs the Chart function */}
    <Chart></Chart>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
