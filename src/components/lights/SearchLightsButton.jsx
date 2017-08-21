// dependencies
import React, {Component} from 'react'

// globals
import {log} from './../../globals.js'

export default class  extends Component {
  
    /**
     * constructor
     */
    constructor(props) {
        super(props)

        this.state = {
        	searching: false
        }
    }

    componentDidMount() {
        log(["Component did mount successfully"])
    }

    /**
     * render component
     * @return {[type]} [description]
     */
    render() {
        return (
          <div className="SearchContainer" style={{display: "inline"}}>
          		<button className="btn btn-primary pull-right" onClick={() => {
					
          		}}>Search <span className="glyphicon glyphicon-search"></span></button>
          </div>
        )
    }
}