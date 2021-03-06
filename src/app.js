"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {BrowserRouter, browserHistory} from 'react-router-dom';
import MainApp from './components/pages/main-app';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


render(
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
            <MainApp/>
        </BrowserRouter>        
    </Provider>, 
    document.getElementById('app')
);