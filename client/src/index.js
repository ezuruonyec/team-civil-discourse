import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import reduxThunk from "redux-thunk"

import App from './components/App';
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
<Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))} > 
    <App />
</Provider>, 
document.getElementById("root"))
