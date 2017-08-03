const redux = require('redux')
import {routerReducer} from 'react-router-redux'

export const configStoreWith = (state = {}) => {
	const reducer = redux.combineReducers({
		routing: routerReducer
	})

	const store = redux.createStore(reducer, state, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	))

	return store
}	