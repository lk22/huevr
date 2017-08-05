// dependencies
import React, {Component} from 'react'
import Axios from 'axios'

// stateless components
import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'
import Bridge from './Bridge.jsx'

export default class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			ip: '0.0.0.0'
		}

		Axios.get('https://www.meethue.com/api/nupnp').then((bridge) => {
			console.log("Bridge ip address: " + bridge.data[0].internalipaddress)

			this.setState({
				ip: bridge.data[0].internalipaddress
			})

		})
	}

	// component is mounted 
	componentDidMount() {
		console.log("App is mounted")
	}

	// rendering the component 
	render() {

		return (
			<div className="mainWrapper">
				<Header />

				<div className="content container-fluid">
					<Sidebar />

					<div className="col-md-9 col-lg-9 main-content">
						<Bridge ip={this.state.ip} />
					</div>
				</div>
			</div>
		)
	}
}