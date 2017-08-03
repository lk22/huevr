import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
	render() {
		return (
			<div className="col-md-2 col-lg Sidebar">
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
				</ul>
			</div>
		)
	}
}