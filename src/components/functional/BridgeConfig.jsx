/**
 * Dependencies
 */
import React, {Component} from 'react'

/**
 * Stateless components
 */
import Header from './../stateless/Header.jsx'
import Navigation from './../stateless/Navigation.jsx'
import NotFoundComponent from './../stateless/NotFoundComponent.jsx'

/**
 * Globals
 */
import {log, fetchBridgeConfig, Storage} from './../../globals.js'

export default class BridgeConfig extends Component {
	constructor(props) {
		super(props);
		
		if(Storage.getItem('username')) {
			fetchBridgeConfig().then((response) => {
				log([
					response.data[0] // the data response object
				])
			})
		}
	}

	componentDidMount() {
		log([ 'Bridge config is mounted' ])
	}

	render() {
		const username = Storage.getItem('username')
		return (
			<div className="BridgeConfigWrapper">
				<Header />
				<div className="content container-fluid">
					<Sidebar />
					<div className="col-md-9 col-lg-9 pull-right main-content">
						<h2 className="text-left">Bridge Configurations</h2>
						<hr/>
						{username ? <div className="container lights-list">{this.list()}</div> : <NotFoundComponent component="Bridge Configuration"/> }
					</div>
				</div> 
			</div>
		) 
	}
}
