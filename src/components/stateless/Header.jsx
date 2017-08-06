import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
	render() {
		return (
			<div className="container-fluid header">
				<Link to="/"><h3 className="navbar-brand">Huevr</h3></Link>
			</div>
		)
	}
}