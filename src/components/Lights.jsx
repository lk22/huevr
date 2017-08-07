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
			lights: {}
		}
	}

	componentDidMount() {
		console.log("light component mounted")
	}

	getLights() {
		const ip = window.localStorage.getItem('ipaddress')
		Axios.get('http://' + ip + '/api/OcRa6hp2FKHi3QkpAQeqPUB29iD56zVFntSxw-Eq/lights').then((lights) => {
			$('.lights-list').html('')
			$.each(lights.data, (index) => {

				const light = lights.data[index]
				const state = light.state.on
				let statements = []

				if(state === true){
					statements.push('Light is turned on')
				} else {
					statements.push('Light is turned off')
				}

				$('.lights-list').append([
					'<div class="row light">',
						'<div class="light-name center-block"><a href="/lights/' + light + '">' + light.name + '</a></div>',
						'<hr/>',
						'<h5 class="light-state-on">' +  statements[0] + '</h5>',
						'<h5 class="light-type">Type: ' + light.type + '</h5>',
						'<h5 class="light-manufacturer">Manufacturer: ' + light.manufacturername + '</h5>',
						'<h5 class="light-alert">Alert: ' + light.state.alert + '</h5>',
						'<hr/>',
					'</div>'
				].join('\n'))
			})
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
							{this.getLights()} 
						</div>
					</div>
				</div> 
			</div>
		)
	}
}