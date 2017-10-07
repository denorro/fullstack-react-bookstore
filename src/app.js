"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions'; 
import {postBook, deleteBook, updateBook} from './actions/booksActions';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BookList from './components/pages/book-list';

render(
    <Provider store={store}>
        <BookList/>
    </Provider>, 
    document.getElementById('app'));