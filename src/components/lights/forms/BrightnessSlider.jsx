import React, {Component} from 'react'
import Axios from 'axios'

import {log, updateBrightness, Storage} from './../../../globals.js'

export default class BrightnessSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log(this.state)
	}

	changeBrightness(e) {
		const value = e.target.value

		updateBrightness(Storage.getItem('lightID'), value)
	}

	render() {
		return(
					<div className="form-group">
						<label htmlFor="brightness">Brightness</label>
						<input type="range" onChange={this.changeBrightness} min="1" max="255" value={this.props.brightness}/>
					</div>
		)
	}
}