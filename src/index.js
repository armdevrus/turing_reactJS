import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
// import Optimisation from "./lifecoding/Optimisation";
import reportWebVitals from './reportWebVitals';
// import ListPrompt from "./homework/5week3day/5week3day";
import CounterForm from "./lifecoding/AdditionalHooks";
import HookStateCallback from "./lifecoding/HookStateCallback";
import Portal from "./lifecoding/Portal";
import Requests from "./lifecoding/Requests";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Requests/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
