// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Link, Router, Route} from 'react-router-dom'


/**
 * globals
 */
import {fetchLight, updateLight, log} from './../../globals.js'

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

		// setup initial state 
		this.state = {

			// light => {}
			light: {

				// data object
				data: {},

				// state object
				state: {},

				// brightness object
				bri: {},

				// contrast object
				ct: {},

				// hue object
				hue: {}
			}
		}
	}

	/**
	 * Component did mount 
	 * @return {[type]} [description]
	 */
	componentDidMount() {

		// store the id of the light bulb
		
			window.localStorage.setItem('lightID', this.props.match.params.id)

		// then grab the stored id
		
			const id = window.localStorage.getItem('lightID')

		// fetch the light with stored id
		
			this.fetchLight(id)
	}

	/**
	 * When the component will mount
	 * @return {[type]} [description]
	 */
	componentWillUnmount() {

		// remove the stored id of the light bulb
		window.localStorage.removeItem('lightID')
	}

	/**
	 * fetch the light with curtain id
	 * @param  {[type]} light [description]
	 * @return {[type]}       [description]
	 */
	fetchLight(light) {

		// save the 
		// const ip = window.localStorage.getItem('ipaddress')
		// // const username = window.localStorage.getItem('username')
		
		// fetch light bulb information from api
		fetchLight(light).then((response) => {

			// save the data object 
			const data = response.data

			// save the state data
			const state = response.data.state

			// initialize state with new data
			this.setState({

				// the light bulb
				light: {

					// whole data object
					data,

					// state object
					state: data.state,

					// brightness value
					bri: data.state.bri,

					// contrast value 
					ct: data.state.ct,

					// hue value
					hue: data.state.hue
				}
			})
		})
	}

	/**
	 * Change brightness value to the lightbulb
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	changeBrightness(e) {

		// prevent default action 
		e.preventDefault()

		// set the brightness value to the value of the changed form element
		this.state.light.bri = e.target.value

		// log the new stored value
		log([this.state.light.bri])

	}

	changeContrast(e) {
		// change contrast here
	}

	changeHue(e) {
		// change Hue coloring here
	}

	/**
	 * render the light with requested data
	 * @return {[type]} [description]
	 */
	light() {
		const light = this.state.light.data
		const state = this.state.light.state
		console.log(this.state.light)
		return (
			<div className="light-single">
				<div className="light-name">{light.name}</div>
				<h4 className="light-manufacturer">Manufacturer: {light.manufacturername}</h4>
				<h4 className="light-model_id">ModelID: {light.modelid}</h4>
				<h4 className="light-type">Type: {light.type}</h4>
				<h4 className="light-state-on">{state.on === true ? 'light is on' : 'light is off'}</h4>

				<div className="light-config-form">
					<form action="#">
						<div className="form-group">
							<label htmlFor="brightness">Brightness</label>
							<input type="range" onChange={this.changeBrightness.bind(this)} min="1" max="255" value={this.state.light.bri}/>
						</div>

						<div className="form-group">
							<label htmlFor="contrast">Contrast</label>
							<input type="range" onChange={this.changeContrast.bind(this)} min="1" max="255" value={this.state.light.ct}/>
						</div>

						<div className="form-group">
							<label htmlFor="hue">Hue</label>
							<input type="range" onChange={this.changeHue.bind(this)} min="1" max="65554" value={this.state.light.hue}/>
						</div>
					</form>
				</div>
			</div>
		)
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {
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