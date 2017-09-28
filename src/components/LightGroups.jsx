import React, {Component} from 'react'
import Axios from 'axios'
import {
	log, 
	fetchLightGroups,
	notifyWith,
	Storage
} from './../globals.js'

import NotFoundComponent from './stateless/NotFoundComponent.jsx'

/**
 * LightGroups list component
 */
export default class LightGroups extends Component {

	/**
	 * Constructor
	 */
	constructor(props) {
		super(props);

		this.state = {

			// light group
			lightGroups: []
		}
	}

	componentDidMount() {
		log(["LightGroups component mounted"])

		this.getLightGroups()
	}

	getLightGroups() {

		// check if the authorization username exists
		if(Storage.getItem('username')) {

			// if so fetch all the light groups from API
			fetchLightGroups().then((response) => {

				// define the light groups and convert data to array keys
				const data = response.data

				// log data
				log([data])
			})

		}

	}
}