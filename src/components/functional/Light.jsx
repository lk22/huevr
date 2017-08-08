import React, {Component} from 'react'

export default class Light extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="row light">
				<h4 className="light-name">{this.props.data.name}</h4>
				<h4 className="light-state-on">{this.props.data.state.on === true ? 'Light is on' : 'Light is off'}</h4>
			</div>
		) 
	}	
}