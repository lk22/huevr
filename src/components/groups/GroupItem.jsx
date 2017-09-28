import React, {Component} from 'react'

import {Link, Router, Route} from 'react-router-dom'
import {
	log,
	env
} from './../../globals.js'

export default class GroupItem extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
	}


	componentDidMount() {
		if(env === 'development') 
			log(["Group item " + this.props.data.id + " is rendered"])
	}

	render() {
		const props = this.props

		if(env === "development") {
			log([props])
		}

		return (
			<div className="row group">
		      	<h4 className="group__class"><Link to={"/" + props.data.id}>{props.data.class}</Link></h4>
		      	<h4 className="group__name">{props.data.name}</h4>
		      	<h4 className="group__type">{props.data.type}</h4>
		   </div>
		)
	}
}