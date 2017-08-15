/**
 * Dependencies
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

/**
 * global functions
 */
import {log, fetchBridgeConfig} from './../../globals.js'

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

		this.state = {
			bridge: {
				api: "",
				backup: {},
			}
		}
	}

	getConfig() {
		fetchBridgeConfig().then((response) => {
			const data = response.data

			this.setState({
				bridge: {
					name: data.name,
					api: data.apiversion,
					status: data.backup.status,
					timezone: data.timezone
				}
			})

			log([response.data, this.state.bridge.backup])

		})
	}

	/**
	 * When the component is mounted
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		this.getConfig()
	}

	/**
	 * rendering the component
	 * @return {[type]} [description]
	 */
	render() {
		const bridge = this.state.bridge
		return (
			<div className="row bridge">
				<h2 style={{fontSize: "20px"}} className="text-left bridge__header">Hue Bridge information</h2>
				<hr/>
				<div className="row">
					<h4>Name: {bridge.name}</h4>
					<h5>Internal IP Address: {this.props.ip}</h5>
					<h5>Bridge id: {this.props.id}</h5>
					<h5>Timezone: {bridge.timezone}</h5>
					<h5>API version: {bridge.api}</h5>
					<h5>Backup Status: {bridge.status}</h5>
				</div>
			</div>
		)
	}
}