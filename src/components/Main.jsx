// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {
	Switch,
 	Route
} from 'react-router-dom'
import {
	log,
 	fetchBridge,
 	getStorageItems,
 	authenticate
} from './../globals.js'

// stateless components
import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'

// functional components
import Bridge from './functional/Bridge.jsx'

/**
 * Main Component
 */
export default class Main extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);

		this.state = {
			ip: '' + window.localStorage.getItem('ipaddress') + '',
			id: '' + window.localStorage.getItem('bridgeID') + '',
		}

		console.log(window.localStorage.ipaddress)
		if(!window.localStorage.getItem('ipaddress')) {
			fetchBridge().then((bridge) => {
				console.log("Bridge ip address: " + bridge.data[0].internalipaddress)

				this.setState({
					ip: bridge.data[0].internalipaddress,
					id: bridge.data[0].id
				})

				if (!window.localStorage.getItem('username') || !window.localStorage.getItem('ipaddress') === this.state.ip){
					authenticate()
				}
			
				window.localStorage.setItem('ipaddress', this.state.ip);
				window.localStorage.setItem('bridgeID', this.state.id)
			})
		}

		getStorageItems(['ipaddress'])
	}

	/**
	 * When the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		log([
			"App is mounted",
			this.state
		])
	}

	/**
	 * Show Loading 
	 * @return {[type]} [description]
	 */
	showLoading() {
		return (
			<div className="loading">
				<h2>Loading...</h2>
			</div>
		)
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {

		const {ip, id} = this.state

		return (
			<div className="mainWrapper">
				<Header />

				<div className="content container-fluid">
					<Sidebar />

					<div className="col-md-9 col-lg-9 pull-right main-content">
						{ip && id ? <Bridge ip={ip} id={id} /> : this.showLoading()} 
 					</div>
				</div>
			</div>
		)
	}
}