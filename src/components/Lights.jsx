import React, {Component} from 'react'
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
				let statement
				if(state === true){
					statement = 'Light is turned on'
				} else {
					statement = 'Light is turned off'
				}

				$('.lights-list').append([
					'<div class="row light">',
						'<h4 class="light-name">' + light.name +'</h4>',
						'<h4 class="light-state-on">' +  statement + '</h4>',
						'<h4 class="light-manufacturer">' + light.manufacturername + '</h4>',
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