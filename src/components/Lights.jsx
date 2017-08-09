// dependencies
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

// stateless component
import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'

// functional components
import LightItem from './lights/LightItem.jsx'

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

		this.state = {
			lights: []
		}
	}

	/**
	 * when the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		console.log("light component mounted")
		this.getLights();
	}

	/**
	 * Fetching all the lights
	 * @return {[type]} [description]
	 */
	getLights() {
		const ip = window.localStorage.getItem('ipaddress')
		const username = window.localStorage.getItem('username')
		console.log(ip)
		Axios.get('http://' + ip +'/api/' + username + '/lights').then((response) => {
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

			this.setState({
				lights
			})
		})
		
	}

	/**
	 * Rendering the list
	 * @return {[type]} [description]
	 */
	list() {
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
		return (
			<div className="lightsWrapper">
				<Header />
				<div className="content container-fluid">
					<Sidebar />
					<div className="col-md-9 col-lg-9 pull-right main-content">
						<h2 className="text-center">Lights Configuration</h2>
						<hr/>
						<div className="container lights-list">
							{this.list()} 
						</div>
					</div>
				</div> 
			</div>
		)
	}
}