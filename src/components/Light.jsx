import React, {Component} from 'react'

export default class Light extends Component {
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		console.log("light component mounted")
	}

	render() {
		return (
			<div className="container lights-container">
				hellow lights 
			</div>
		)
	}
}