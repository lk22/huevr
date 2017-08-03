// dependencies
import React, {Component} from 'react'
import Axios from 'axios'

// stateless components
import Header from './stateless/Header.jsx'
import Sidebar from './stateless/Sidebar.jsx'
import NotFoundComponent from './stateless/NotFoundComponent.jsx'

export default class Main extends Component {

	// component is mounted 
	componentDidMount() {
		Axios.get('https://www.meethue.com/api/nupnp').then((bridge) => {
			console.log(bridge)
		})
	}

	// rendering the component 
	render() {
		return (
			<div className="mainWrapper">
				<Header />

				<div className="content container-fluid">
					<Sidebar />

					<div className="col-md-10 col-lg-10 main-content">
						<p>this is the content</p>
					</div>
				</div>
			</div>
		)
	}
}