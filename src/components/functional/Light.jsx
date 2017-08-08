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

		this.state = {
			light: {}
		}
	}

	/**
	 * Component did mount 
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		console.log("Light: " + this.props.match.params.id + " is loaded")
		const id = this.props.match.params.id
		this.fetchLight(id)
	}

	fetchLight(light) {
		const id = this.props.match.params.id
		const ip = window.localStorage.getItem('ipaddress')
		Axios.get('http://' + ip + '/api/OcRa6hp2FKHi3QkpAQeqPUB29iD56zVFntSxw-Eq/lights/' + id).then((response) => {
			const data = response.data
			console.log(data)

			this.setState({
				light: data
			})

			// console.log(this.state)
		})
	}

	light() {
		const light = this.state.light
		return (
			<div className="light-single">
				<div className="light-name">{light.name}</div>
				<h4 className="light-manufacturer">Manufacturer: {light.manufacturername}</h4>
				<h4 className="light-model_id">ModelID: {light.modelid}</h4>
				<h4 className="light-type">Type: {light.type}</h4>
			</div>
		)
		
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {
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
							{this.light()}
						</div>
					</div>
				</div> 
			</div>
		) 
	}	
}