import React, {Component} from 'react'
import Axios from 'axios'

import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'

export default class Main extends Component {
	componentDidMount() {
		Axios.get('https://www.meethue.com/api/nupnp').then((bridge) => {
			console.log(bridge)
		})
	}

	render() {
		return (
			<div className="mainWrapper">
				<Header />

				<div className="content container-fluid">
					<Sidebar />

					<div className="col-md-10 col-lg-10 main-content">

					</div>
				</div>
			</div>
		)
	}
}