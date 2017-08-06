import React, {Component} from 'react'
import Axios from 'axios'
const $ = require('jquery')

import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'

export default class Light extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lights: {}
		}

	}

	componentDidMount() {
		console.log("light component mounted")
		Axios.get('http://' + window.localStorage.getItem('ipaddress') + '/api/OcRa6hp2FKHi3QkpAQeqPUB29iD56zVFntSxw-Eq/lights').then((lights) => {
			this.setState({
				lights: lights.data
			})
		})
	}

	getLights() {
		$.each(this.state.lights, (index) => {
			const light = this.state.lights[index]
			console.log(light)
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
						{this.getLights()}
 					</div>
				</div>
			</div>
		)
	}
}