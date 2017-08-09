import React, {Component} from 'react'

import {log, updateBrightness} from './../../../globals.js'

export default class ColorSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log(this.state)
	}

	changeBrightness(e) {
		const value = e.target.value
		updateBrightness(value)
	}

	render() {
		return(
			<div className="light-config-form">
				<form action="#">
					<div className="form-group">
						<label htmlFor="brightness">Brightness</label>
						<input type="range" onChange={this.changeBrightness} min="1" max="255" value={this.props.brightness}/>
					</div>

					<div className="form-group">
						<label htmlFor="contrast">Contrast</label>
						<input type="range" onChange={this.changeContrast} min="1" max="255" value={this.props.contrast}/>
					</div>

					<div className="form-group">
						<label htmlFor="hue">Hue</label>
						<input type="range" onChange={this.changeHue} min="1" max="65554" value={this.props.hue}/>
					</div>
				</form>
			</div>
		)
	}
}