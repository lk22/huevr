import React, {Component} from 'react'
import Axios from 'axios'

import {log, updateBrightness, Storage} from './../../../globals.js'

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

		Axios.put('http://' + Storage.getItem('ipaddress') + '/api/' + Storage.getItem('username') + '/lights/' + Storage.getItem('lightID') + '/state', JSON.stringify({
			"hue": JSON.parse(e.target.value)
		}))
	}

	
	render() {
		return(

			<div className="form-group">
				<label htmlFor="brightness">Hue</label>
				<input type="range" onChange={this.changeBrightness} min="1" max="65550" value={this.props.hue}/>
			</div>
		)
	}
}