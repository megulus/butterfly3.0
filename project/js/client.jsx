import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import AppView from './components/AppView/AppView';

import rootReducer from './reducers/index';

const app = document.getElementById('app');
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);


ReactDOM.render(
    <Provider store={store}>
        <AppView />
    </Provider>,
    app
);