// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {
	Switch,
 	Route
} from 'react-router-dom'

/**
 * globals
 */
import {
	log,
 	fetchBridge,
 	getStorageItems,
 	authorize,
 	notifyWith
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

		// clear storage
		

		this.state = {}

			// fetch information about hue bridge
			fetchBridge().then((bridge) => {

				// log the ip address to console
				log(["Bridge ip address: " + bridge.data[0].internalipaddress])

				// set the id and ip address to component state				
				this.setState({

					// Bridge ip address
					ip: bridge.data[0].internalipaddress,

					// Bridge id 
					id: bridge.data[0].id

				})

				// save the information in local storage
				window.localStorage.setItem('ipaddress', this.state.ip)
				window.localStorage.setItem('bridgeID', this.state.id)


				// if author username dosen't exist 
				if (!window.localStorage.getItem('username')){

					// authorize the client 
					authorize() // authorize user with new given username

				} else {
					notifyWith('Welcome Back', {
						body: 'Welcome back, good to see you again'
					})
				}
			})

			log([window.localStorage])
			
		// getStorageItems(['ipaddress'])
	}

	/**
	 * When the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {

		log([
			"App is mounted"
		])
	}

	/**
	 * Show Loading 
	 * @return {[type]} [description]
	 */
	showLoading() {
		return (
			<div className="loading">
				<h2>Authorizing...</h2>
			</div>
		)
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {

		const {ip, id} = this.state
		const username = window.localStorage.getItem('username')

		return (
			<div className="mainWrapper">

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