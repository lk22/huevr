import React, {Component} from 'react'
import Axios from 'axios'

import {log, updateHue, Storage} from './../../../globals.js'

export default class HueSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log(this.state)
	}

	changeHue(e) {
		const value = e.target.value

		updateHue(Storage.getItem('lightID'), value)
	}

	
	render() {
		return(

			<div className="form-group">
				<label htmlFor="brightness">Hue</label>
				<input type="range" onChange={this.changeHue} min="1" max="65550" value={this.props.hue}/>
			</div>
		)
	}
}