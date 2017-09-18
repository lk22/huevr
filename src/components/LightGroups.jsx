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
	}

	getLightGroups() {

		if(Storage.getItem('username')) {

			fetchLightGroups().then((response) => {
				const data = response.data

				log([data])
			})

		}


	}
}