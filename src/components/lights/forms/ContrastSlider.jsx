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

	changeContrast(e) {
		const value = e.target.value

		Axios.put('http://' + Storage.getItem('ipaddress') + '/api/' + Storage.getItem('username') + '/lights/' + Storage.getItem('lightID') + '/state', JSON.stringify({
			"ct": JSON.parse(e.target.value)
		}))
	}

	
	render() {
		return(
			<div className="light-config-form">
				<form action="#">
					<div className="form-group">
						<label htmlFor="brightness">Contrast</label>
						<input type="range" onChange={this.changeContrast} min="1" max="255" value={this.props.contrast}/>
					</div>
				</form>
			</div>
		)
	}
}