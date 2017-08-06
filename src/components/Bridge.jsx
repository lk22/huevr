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
			<div className="bridge">
				<h4 className="text-center">Bound Bridge:</h4>
				<h5 className="text-center">IP: {this.props.ip}</h5>
				<h5 className="text-center">id: {this.props.id}</h5>
			</div>
		)
	}
}