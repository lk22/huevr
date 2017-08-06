/**
 * dependencies
 */

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Provider} from 'react-redux'
    import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
    import './css/app.css';

/**
 * Store
 */

    const store = require('./store/storeConfig.jsx').configStoreWith({})

/**
 * Main Components
 */

    import Main from './components/Main.jsx'
    import Light from './components/Light.jsx'

/**
 *  Defining routes 
 */

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main}/>

                </Switch>
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )