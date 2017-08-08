// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Link, Router, Route} from 'react-router-dom'

// stateless components
import Header from './../stateless/Header.jsx'
import Sidebar from './../stateless/Sidebar.jsx'

// Light Components
import LightItem from './../lights/LightItem.jsx'

// Single light component
export default class Light extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Component did mount 
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		// console.log("Light: " + this.match.params.id + "is loaded")
		console.log(this.props.match.params.id)
	}

	fetchLight(light) {
		const ip = window.localStorage.getItem('ipaddress')
		console.log(ip)
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		const props = this.props
		const param = this.props.match.params
		return(
			<div className="lightWrapper">
				<Header />
				<div className="content container-fluid">
					<Sidebar />
					<div className="col-md-9 col-lg-9 pull-right main-content">
						<h2 className="text-center"></h2>
						<hr/>
						<div className="container light-content">
							
						</div>
					</div>
				</div> 
			</div>
		) 
	}	
}