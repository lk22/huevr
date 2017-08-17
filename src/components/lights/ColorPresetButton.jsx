import React, {Component} from 'react'
import Axios from 'axios'

import {log, notifyWith} from './../../globals.js'

export default class ColorPresetButton extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let Color

        switch(this.props.color) {
            case "red":
                Color = 65280
                break;
            case "green":
                Color = 25500
                break;
            case "blue":
                Color = 46920
                break;
            case "yellow":
                Color = 12750
                break;
        }

            return ( <button className={"preset-" + this.props.color + " btn"} onClick={() => {
                Axios.put('http://' + window.localStorage.getItem('ipaddress') + '/api/' + window.localStorage.getItem('username') + '/lights/' + this.props.light + '/state', {
                    "hue": Color
                }).then((response) => {
                    return notifyWith("Color Changed", {
                        body: "Color changed to " + this.props.color
                    })
                })
            }}>{this.props.color}</button> )
    }
}