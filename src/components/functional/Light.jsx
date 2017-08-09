// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Link, Router, Route} from 'react-router-dom'

/**
 * globals
 */
import {fetchLight} from './../../globals.js'

// stateless components
import Header from './../stateless/Header.jsx'
import Sidebar from './../stateless/Sidebar.jsx'

// Light Components
import LightItem from './../lights/LightItem.jsx'

/**
 * form components
 */
import ColorSlider from './../lights/forms/ColorSlider.jsx'

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
			light: {
				data: {},
				state: {}
			}
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
		const ip = window.localStorage.getItem('ipaddress')
		const username = window.localStorage.getItem('username')
		
		fetchLight(light).then((response) => {
			const data = response.data
			const state = response.data.state

			this.setState({
				light: {
					data,
					state: data.state
				}
			})
		})
	}

	light() {
		const light = this.state.light.data
		const state = this.state.light.state
		return (
			<div className="light-single">
				<div className="light-name">{light.name}</div>
				<h4 className="light-manufacturer">Manufacturer: {light.manufacturername}</h4>
				<h4 className="light-model_id">ModelID: {light.modelid}</h4>
				<h4 className="light-type">Type: {light.type}</h4>
				<h4 className="light-state-on">{state.on === true ? 'light is on' : 'light is off'}</h4>
				<ColorSlider brightness={state.bri} contrast={state.ct} hue={state.hue}/>
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