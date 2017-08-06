// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {Light} from './Light.jsx'

// stateless components
import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'
import Bridge from './Bridge.jsx'

export default class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			ip: '0.0.0.0',
			id: null
		}

		Axios.get('https://www.meethue.com/api/nupnp').then((bridge) => {
			console.log("Bridge ip address: " + bridge.data[0].internalipaddress)

			this.setState({
				ip: bridge.data[0].internalipaddress,
				id: bridge.data[0].id
			})

		})
	}

	// component is mounted 
	componentDidMount() {
		console.log("App is mounted")
		console.log(this.state)
	}

	// rendering the component 
	render() {

		const {ip, id} = this.state

		return (
			<div className="mainWrapper">
				<Header />

				<div className="content container-fluid">
					<Sidebar />
					{ip && id ? <Bridge ip={ip} id={id} /> : <NotFoundComponent/>} 

					<div className="col-md-9 col-lg-9 pull-right main-content">
						{ip && id ? <Bridge ip={ip} id={id} /> : <NotFoundComponent/>} 
 					</div>
				</div>
			</div>
		)
	}
}