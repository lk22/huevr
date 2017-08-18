import React, {Component} from 'react'
import Axios from 'axios'

import {log, notifyWith} from './../../globals.js'

export default class ColorPresetButton extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let preset

        switch(this.props.preset) {
            case "red":
                preset = 65280
                break;
            case "green":
                preset = 25500
                break;
            case "blue":
                preset = 46920
                break;
            case "yellow":
                preset = 12750
                break;
            case "lightblue":
                preset = 35920
                break;
            case "lightgreen":
                preset = 30920
                break;
        }

            return ( 
                    <div className="col-md-2 preset">
                        <button className={"preset-" + this.props.preset + " btn"} onClick={() => {
                            Axios.put('http://' + window.localStorage.getItem('ipaddress') + '/api/' + window.localStorage.getItem('username') + '/lights/' + this.props.light + '/state', {
                                "hue": preset
                            }).then((response) => {
                                return notifyWith("Color Changed", {
                                    body: "Color changed to " + this.props.preset
                                })
                            })
                        }}>{this.props.preset}</button> 
                    </div>
            )
    }
}