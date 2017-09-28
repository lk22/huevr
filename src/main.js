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
    import Light from './components/functional/Light.jsx'
    import BridgeConfig from './components/functional/BridgeConfig.jsx'
    import LightGroups from './components/LightGroups.jsx'

/**
 *  Defining routes 
 */
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/lightgroups" component={LightGroups}/>
                    <Route path="/lights" component={Lights}/>
                    <Route path="/:id" component={Light}/>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    )