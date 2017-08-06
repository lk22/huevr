import React, {Component} from 'react'
import Axios from 'axios'

import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'

export default class Light extends Component {
	constructor(props) {
		super(props);

		this.state = {}
		const storage = window.localStorage
		console.log(storage)
	}

	componentDidMount() {
		console.log("light component mounted")
		Axios.get('http://' + localStorage.getItem('ipaddress') + '/api/OcRa6hp2FKHi3QkpAQeqPUB29iD56zVFntSxw-Eq/lights').then((lights) => {
			lights.map((light) => console.log(light))
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
 					</div>
				</div>
			</div>
		)
	}
}