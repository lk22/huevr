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
			<div className="row bridge">
				<h2 className="text-center">Hue Bridge information</h2>
				<hr/>
				<div className="row">
					<h5>Internal IP Address: {this.props.ip}</h5>
					<h5>Bridge id: {this.props.id}</h5>
				</div>
			</div>
		)
	}
}