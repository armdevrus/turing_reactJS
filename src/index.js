import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
// import Optimisation from "./lifecoding/Optimisation";
import reportWebVitals from './reportWebVitals';
// import ListPrompt from "./homework/5week3day/5week3day";
// import CounterForm from "./lifecoding/AdditionalHooks";
// import HookStateCallback from "./lifecoding/HookStateCallback";
// import Portal from "./lifecoding/Portal";
// import Requests from "./lifecoding/Requests";
// import UserList from "./lifecoding/HOC";
import store from "./app/store";
import Counter from "./features/counter/Counter";
import CounterShow from "./features/counter/CounterShow";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
