import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {
	log, 
	fetchLightGroups,
	notifyWith,
	Storage
} from './../globals.js'

import NotFoundComponent from './stateless/NotFoundComponent.jsx'
import GroupItem from './groups/GroupItem.jsx'

/**
 * LightGroups list component
 */
export default class LightGroups extends Component {

	/**
	 * Constructor
	 */
	constructor(props) {
		super(props);

		this.state = {

			// light group
			lightGroups: []
		}
	}

	/**
	 * When the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		log(["LightGroups component mounted"])

		this.getLightGroups()
	}

	/**
	 * get the light groups 
	 * @return {[type]} [description]
	 */
	getLightGroups() {

		// check if the authorization username exists
		if(Storage.getItem('username')) {

			// if so fetch all the light groups from API
			fetchLightGroups().then((response) => {

				// define the light groups and convert data to array keys
				const data = response.data

				const lightGroups = Object.keys(data).map((id) => {
					return Object.assign(data[id], {
						id: parseInt(id, 10),
					})
				})

				// log data
				log([data])

				this.setState({
					lightGroups
				})
			})

		}

	}

	list() {
		return this.state.lightGroups.map((group, index) => {
			return (
			    <GroupItem 
			      	key={index}
			      	data={group}
			    />
			)
		})
	}

	/**
	 * render the component
	 */
	render() {

		const username = Storage.username
		return (
			<div className="lightGroup__wrapper">
				<div className="content container-fluid">
					<div className="col-md-12 col-lg-12 pull-right main-content">
					<div className="title-section">
						<h2 className="text-left">Light groups</h2>
						<Link to="/" className="btn btn-primary pull-right"><span className="glyphicon glyphicon-home"></span> Home</Link>
					</div>
						<div className="container group-list">
							{this.list()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}