// Dependencies
import React, {Component} from 'react'
import {Link, Router, Route} from 'react-router-dom'

import {log} from './../../globals.js'

/**
 * Light Item component 
 */
export default class LightItem extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
	}
	
	/**
	 * When component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		if(process.env.NODE_ENV === "development")
			log(["Light item " + this.props.data.id + " is rendered"])
		
	}

	/**
	 * rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		const props = this.props

		if(process.env.NODE_ENV === "development"){
			log([props])
		}
		
		return(
			<div className="row light">
				<h4 className="light-name"><Link to={"/" + props.data.id}>{props.data.name}</Link></h4>
				<h4 className="light-manufacturer">Manufacturer: {props.data.manufacturername}</h4>
				<h4 className="light-model_id">ModelID: {props.data.modelid}</h4>
				<h4 className="light-type">Type: {props.data.type}</h4>
			</div>
		) 
	}	
}
// <h4 className="light-state-on">State: {props.data.state.on === true ? 'Light is on' : 'Light is off'}</h4>