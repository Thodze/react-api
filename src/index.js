import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose } from "redux";
import appReducers from "./reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const enhancers = [
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

/**
 *
 * @type {Store<EmptyObject & {}, AnyAction>}
 */
const store = createStore(
    appReducers,
    compose(...enhancers)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
