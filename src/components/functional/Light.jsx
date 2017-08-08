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
		console.log("Light: " + this.props.match.params.id + "is loaded")
		console.log(this.props.match.params.id)
		const light = this.props.match.params.id
		this.fetchLight(light)
	}

	fetchLight(light) {
		const id = this.props.match.params.id
		const ip = window.localStorage.getItem('ipaddress')
		console.log(ip)

		Axios.get('http://' + ip + '/api/O6fCoPRaW0VIyB75qKK9BAGfi85wxWHgfnhfsQkb/lights/' + id).then((response) => {
			console.log(response)
		})
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