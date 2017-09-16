// dependencies
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

/**
 * globals
 */
import {fetchLights, log, Storage} from './../globals.js'

// stateless component
import Navigation from './stateless/Navigation.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'

// functional components
import LightItem from './lights/LightItem.jsx'
import SearchLightsButton from './lights/SearchLightsButton.jsx'

/**
 * Lights list component
 */
export default class Lights extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);

		// setup initial state
		this.state = {

			// lights array
			lights: []
		}
	}

	/**
	 * when the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		log(["light component mounted"])

		// get all the lights
		this.getLights();
	}

	/**
	 * Fetching all the lights
	 * @return {[type]} [description]
	 */
	getLights() {

		// check if the authorization username exists
		if(Storage.getItem('username')) {

			// if so, fetch all the lights from API
			fetchLights().then((response) => {

			 	// console.log(response)
				const data = response.data;

				// define the lights and convert data to array keys
				const lights = Object.keys(data).map((id) => {

					// assign id key
					return Object.assign(data[id], {

						// id field => integer
						id: parseInt(id, 10),
					})
				})


				// add the lights to the state
				this.setState({

					// with the new lights data
					lights
				})
			})
		}
	}

	/**
	 * Rendering the list
	 * @return {[type]} [description]
	 */
	list() {

		// render the list of light items
		return this.state.lights.map((light, index) => {
			return (
			   <LightItem
					key={index}
					data={light}
			   />
			);
		})
	}

	/**
	 * Rendering the lights list component
	 * @return {[type]} [description]
	 */ 
	render() {
		const username = Storage.username
		return (
			<div className="lightsWrapper">
				<div className="content container-fluid">
					<div className="col-md-12 col-lg-12 pull-right main-content">
						{username ? (
							<div className="title-section">
								<h2 className="text-left">Lights</h2>
								<SearchLightsButton />
								<Link to="/" className="btn btn-primary pull-right"><span className="glyphicon glyphicon-home"></span> Home</Link>
							</div>
						) : ''}
						<hr/>
						{username ? <div className="container lights-list">{this.list()}</div> : <NotFoundComponent component="lights"/> }
					</div>
				</div>
			</div>
		)
	}
}