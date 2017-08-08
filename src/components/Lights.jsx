import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
const $ = require('jquery')

import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import Light from './functional/Light.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'

export default class Lights extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lights: []
		}
	}

	componentDidMount() {
		console.log("light component mounted")
		this.getLights();
	}

	getLights() {
		const ip = window.localStorage.getItem('ipaddress')
		 
		Axios.get('http://' + ip +'/api/O6fCoPRaW0VIyB75qKK9BAGfi85wxWHgfnhfsQkb/lights').then((response) => {
			// console.log(response)
			const data = response.data;		
			const lights = Object.keys(data).map((id) => {
				return Object.assign(data[id], {
					id: parseInt(id, 10),
				})
			})

			this.setState({
				lights
			})
			console.log(lights);
		})
		
	}

	list() {
		return this.state.lights.map((light, index) => {
			return (
			   <Light 
					key={index}
					data={light}
			   />
			);
		})
	}

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