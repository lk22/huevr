// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Link, Router, Route} from 'react-router-dom'

/**
 * globals
 */
import {fetchLight, updateLight} from './../../globals.js'

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
				state: {},
				bri: {},
				ct: {},
				hue: {}
			}
		}
	}

	/**
	 * Component did mount 
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		window.localStorage.setItem('lightID', this.props.match.params.id)
		const id = window.localStorage.getItem('lightID')
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

	changeBrightness(e) {
		const bri = this.state.light.state.bri
		this.setState({
			bri: e.target.value
		})
		e.preventDefault()
		console.log(e.target.value)
		Axios.put('http://' + window.localStorage.getItem('ipaddress') + '/api/' + window.localStorage.getItem('username') + '/lights/' + window.localStorage.getItem('lightID') + '/state', {
			"bri": e.target.value
		})
	}

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
							<input type="range" onChange={this.changeBrightness.bind(this)} min="1" max="255" value={state.bri}/>
						</div>

						<div className="form-group">
							<label htmlFor="contrast">Contrast</label>
							<input type="range" min="1" max="255" value={state.ct}/>
						</div>

						<div className="form-group">
							<label htmlFor="hue">Hue</label>
							<input type="range" min="1" max="65554" value={state.hue}/>
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

// <ColorSlider brightness={state.bri} contrast={state.ct} hue={state.hue}/>