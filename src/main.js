/**
 * Main
 */

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Provider} from 'react-redux'
    import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
    import './css/app.css';
    const store = require('./store/storeConfig.jsx').configStoreWith({})

    import Main from './components/Main.jsx'


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