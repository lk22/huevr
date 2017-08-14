// Dependencies
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

/**
 * Sidebar Component
 */
export default class Sidebar extends Component {

	/**
	 * Rendering the component 
	 * @return {[type]} [description]
	 */
	render() {
		return (
			<div className="col-md-2 col-lg-2 pull-left Sidebar">
				<ul className="nav-list">
					<li className="list-item">
						<Link to="/lights">Lights</Link>
					</li>
					<li className="list-item">
						<Link to="/lightgroups">Light groups</Link>
					</li>
					<li className="list-item">
						<Link to="/scenes">Scenes</Link>
					</li>
					<li className="list-item">
						<Link to="/schedules">Schedules</Link>
					</li>
					<li className="list-item">
						<Link to="/">Home</Link>
					</li>
				</ul>
			</div>
		)
	}
}