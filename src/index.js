import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterDemo from "./Components/CounterDemo";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './Others/Theme'
import Form from "./Components/Form";
import FormTwo from "./Components/form-component/CustomAutoComplete";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Form/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
