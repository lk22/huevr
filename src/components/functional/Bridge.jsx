// Dependencies
import React, {Component} from 'react'

/**
 * Bridge Component
 */
export default class Bridge extends Component {

	/**
	 * Constructor
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * When the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		console.log("bridge component is mounted")
	}

	/**
	 * rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		return (
			<div className="row bridge">
				<h2 className="text-left">Hue Bridge information</h2>
				<hr/>
				<div className="row">
					<h5>Internal IP Address: {this.props.ip}</h5>
					<h5>Bridge id: {this.props.id}</h5>
				</div>
			</div>
		)
	}
}