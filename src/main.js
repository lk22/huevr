/**
 * Main
 */

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Provider} from 'react-redux'
    import {Route, Router, HashHistory, BrowserHistory} from 'react-router'
    // import './css/app.css';

    const store = require('./store/storeConfig.jsx').configStoreWith({})

    ReactDOM.render(
        <Provider store={store}>
    
        </Provider>,
        document.getElementById('app')
    )