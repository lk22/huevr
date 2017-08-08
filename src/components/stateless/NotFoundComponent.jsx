// dependencies
import React, {Component} from 'react'

/**
 * Not found component 
 */
export default class NotFoundComponent extends Component {

	/**
	 * Rendering the component 
	 * @return {[type]} [description]
	 */
	render() {
		return (
			<div className="NotFound">
				<h4>We could find any data about your bridge</h4>
				<h5>connect to a internet with a bound bridge</h5>
				<h5>or click the connection button on the bridge and try again</h5>
			</div>
		)
	}
}