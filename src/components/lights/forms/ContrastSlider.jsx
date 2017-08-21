import React, {Component} from 'react'
import Axios from 'axios'

import {log, updateContrast, Storage} from './../../../globals.js'

export default class ContrastSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		console.log(this.state)
	}

	changeContrast(e) {
		const value = e.target.value

		updateContrast(Storage.getItem('lightID'), value)
	}

	
	render() {
		return(
					<div className="form-group">
						<label htmlFor="brightness">Contrast</label>
						<input type="range" onChange={this.changeContrast} min="1" max="255" value={this.props.contrast}/>
					</div>
		)
	}
}