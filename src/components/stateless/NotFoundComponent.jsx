import React, {Component} from 'react'

export default class NotFoundComponent extends Component {

	constructor() {
		super()
		this.setState({
			shown:false
		})
	}

	componentDidMount() {
		this.setState({
			shown: true
		})

		console.log(this.state.shown)
	}

	render() {
		return (
			<div className="NotFoundComponent">
				<h4>We could find any data about your bridge</h4>
				<h5>connect to a internet with a bound bridge</h5>
				<h5>or click the connection button on the bridge and try again</h5>
			</div>
		)
	}
}