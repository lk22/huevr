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
		    <div className="container-fluid home_navigation">
				<ul className="nav-list">
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/lights">
							<div className="link-icon center-block">
								<span className="glyphicon glyphicon-flash"></span>
							</div>
							<h3 className="text-center">Lights</h3>
						</Link>
					</li>
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/lightgroups">
							<div className="link-icon center-block">
									<span className="glyphicon glyphicon-wrench"></span>
								</div>
							<h3 className="text-center">Light groups</h3>
						</Link>
					</li>
					{/*<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/scenes">Scenes</Link>
					</li>
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/schedules">Schedules</Link>*/}
					{/*</li>*/}
					<li className="list-item col-xs-12 col-sm-6 col-md-4 col-lg-4">
						<Link to="/">
							<div className="link-icon center-block">
								<span className="glyphicon glyphicon-home"></span>
							</div>
							<h3 className="text-center">Home</h3>
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}