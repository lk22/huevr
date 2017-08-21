// dependencies
import React, {Component} from 'react'
import Axios from 'axios'
import {Link, Router, Route} from 'react-router-dom'

/**
 * globals
 */
import {fetchLight, updateLight, log, notifyWith, Storage} from './../../globals.js'

// stateless components
import Sidebar from './../stateless/Sidebar.jsx'

// functional Components
import LightItem from './../lights/LightItem.jsx'
import ColorPresetButton from './../lights/ColorPresetButton.jsx'

/**
 * form components
 */
import LightConfigForm from './../lights/forms/LightConfigForm.jsx'

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
				bri: 0,

				// contrast object
				ct: 0,

				// hue object
				hue: 0
			}
		}
	}

	/**
	 * Component did mount
	 * @return {[type]} [description]
	 */
	componentDidMount() {

		// store the id of the light bulb

			Storage.setItem('lightID', this.props.match.params.id)

		// then grab the stored id

			const id = Storage.getItem('lightID')

		// fetch the light with stored id

			this.fetchLight(id)
	}

	/**
	 * When the component will mount
	 * @return {[type]} [description]
	 */
	componentWillUnmount() {

		// remove the stored id of the light bulb
		Storage.removeItem('lightID')
	}

	/**
	 * fetch the light with curtain id
	 * @param  {[type]} light [description]
	 * @return {[type]}       [description]
	 */
	fetchLight(light) {

		// save the
		// const ip = Storage.getItem('ipaddress')
		// // const username = Storage.getItem('username')

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
		log(['Brightness state:  ' + this.state.light.bri, this.state.light])

		// updateLight(Storage.getItem('lightID'), 'brightness', e.target.value)
		return updateLight(Storage.getItem('lightID'), 'brightness', this.state.light.bri)

	}

	changeContrast(e) {
		// change contrast here
	}

	changeHue(e) {
		// change Hue coloring here
	}

	updateRed(e) {
		log([Storage])


	}

	updateBlue(e) {
		log([Storage])
	}

	/**
	 * render the light with requested data
	 * @return {[type]} [description]
	 */
	light() {
		const light = this.state.light.data
		const state = this.state.light.state
		const Light = document.querySelector('.light-single')
		console.log(this.state.light)
		return (

			<div className="light-single" >
				<div className="light-single__name">{light.name}</div>
				<h4 className="light-single__manufacturer">Manufacturer: {light.manufacturername}</h4>
				<h4 className="light-single__model_id">ModelID: {light.modelid}</h4>
				<h4 className="light-single__type">Type: {light.type}</h4>
				<h4 className="light-single__state-on">{state.on === true ? <div className="label label-success">light is on</div> : <div className="label label-danger">light is off</div>}</h4>
					
				<hr/>

				<div className="row brightness">
					<h3>Light Settings</h3>
					<LightConfigForm 
						brightness={light.bri}
						contrast={light.ct}
						hue={light.hue}
					/>
				</div>

				<div className="row color-presets">
					<h3>Color Presets</h3>
					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="red"
					/>

					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="blue"
					/>

					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="green"
					/>

					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="yellow"
					/>

					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="lightblue"
					/>

					<ColorPresetButton
						name={light.name}
						light={Storage.getItem('lightID')}
						preset="lightgreen"
					/>

				</div>
				<div className="row light-switch">
				<h3>Light switch</h3>

						{this.state.light.state.on === true ? (
							<button className="turn-off btn btn-default" onClick={() => {
								return Axios.put('http://' + Storage.getItem('ipaddress') + '/api/' + Storage.getItem('username') + '/lights/' + Storage.getItem('lightID') + '/state', {
									"on": false
								}).then((response) => {

									window.location.reload()
									return notifyWith(light.name, {
										body: "Is now turned off."
									})
								})
							}}>Turn off</button>

							) : (

							<button className="turn-on btn btn-default" onClick={() => {
								return Axios.put('http://' + Storage.getItem('ipaddress') + '/api/' + Storage.getItem('username') + '/lights/' + Storage.getItem('lightID') + '/state', {
									"on": true
								}).then((response) => {

									window.location.reload()
									return notifyWith(light.name, {
										body: "Is now turned on."
									})
								})
							}}>Turn on</button>

							)}
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
				<div className="content container-fluid">
					<Sidebar />
					<div className="col-md-9 col-lg-9 pull-right main-content">
						<h2 className="text-center">{this.state.light.name}</h2>
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
// onChange={this.changeBrightness.bind(this)}