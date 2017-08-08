// dependencies
import React, {Component} from 'react'
import {Link, Router, Route} from 'react-router-dom'

// stateless components
import Header from './../stateless/Header.jsx'
import Sidebar from './../stateless/Sidebar.jsx'

// Light Components
import LightItem from './../lights/LightItem.jsx'

// Single light component
export default class Light extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * Component did mount 
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		console.log("Light: " + this.props.data.name + "is loaded")
	}

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		return(
			<div className="lightWrapper">
				
			</div>
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