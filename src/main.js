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
    import Lights from './components/Lights.jsx'

/**
 *  Defining routes 
 */

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/lights" component={Lights}/>
                </Switch>
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )