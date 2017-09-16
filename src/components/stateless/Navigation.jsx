// Dependencies
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

/**
 * Sidebar Component
 */
export default class Navigation extends Component {

	/**
	 * Rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		return (
			<div className="col-md-2 col-lg-2 pull-left nav">
				<ul className="nav-list">
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/lights">Lights</Link>
					</li>
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/lightgroups">Light groups</Link>
					</li>
					{/*<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/scenes">Scenes</Link>
					</li>
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/schedules">Schedules</Link>*/}
					{/*</li>*/}
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/">Home</Link>
					</li>
				</ul>
			</div>
		)
	}
}