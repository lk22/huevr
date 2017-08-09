// dependencies
import React, {Component} from 'react'

/**
 * Not found component 
 */
export default class NotFoundComponent extends Component {

	constructor(props) {
		super(props);
	}

	/**
	 * Rendering the component 
	 * @return {[type]} [description]
	 */
	render() {
		return (
			<div className="NotFound">
				<h4>We could find any data about your {this.props.component}</h4>
				<hr/>
				
				<h4>things to do: </h4>
				<h5>Use a connection with a bound bridge.</h5>
				<h5>Click your link button on the bridge (U may not be succesfully authorized).</h5>
				<h5>press the button bellow to try again (this will perform full page refresh).</h5>
				<button onClick={() => {setTimeout(() => {
					window.location.reload()
				}, 1000)}} className="btn btn-primary try-again-btn">Try again</button>
			</div>
		)
	}
}