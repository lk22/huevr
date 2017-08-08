import React, {Component} from 'react'
import {Link, Router, Route} from 'react-router-dom'

export default class Light extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		console.log(this.props.data.id)
	}

	render() {

		const props = this.props
		return(
			<div className="row light">
				<h4 className="light-name"><Link to={"/" + props.data.id}>{props.data.name}</Link></h4>
				<h4 className="light-state-on">State: {props.data.state.on === true ? 'Light is on' : 'Light is off'}</h4>
				<h4 className="light-manufacturer">Manufacturer: {props.data.manufacturername}</h4>
				<h4 className="light-model_id">ModelID: {props.data.modelid}</h4>
				<h4 className="light-type">Type: {props.data.type}</h4>
			</div>
		) 
	}	
}