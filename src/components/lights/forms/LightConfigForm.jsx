import React, {Component} from 'react'
import Axios from 'axios'

import {log, updateBrightness, Storage} from './../../../globals.js'

import BrightnessSlider from './BrightnessSlider.jsx'
import ContrastSlider from './ContrastSlider.jsx'
import HueSlider from './HueSlider.jsx'
 
export default class ColorSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log(this.state)
	}
	
	render() {
		return(
			<div className="light-config-form">
				<form action="#">
					<BrightnessSlider brightness={this.props.brightness} />
					<ContrastSlider contrast={this.props.contrast} />
					<HueSlider hue={this.props.hue} />
				</form>
			</div>
		)
	}
}