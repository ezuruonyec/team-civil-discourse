import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import reduxThunk from "redux-thunk"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'fontsource-roboto';

import App from './components/App';
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))} > 
            <App />
        </Provider>
    </MuiPickersUtilsProvider>,
document.getElementById("root"))
