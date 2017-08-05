import React, {Component} from 'react'

export default class Bridge extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("bridge component is mounted")
	}

	render() {
		return (
			<div className="container bridge">
				<h2>IP: {this.props.ip}</h2>
			</div>
		)
	}
}