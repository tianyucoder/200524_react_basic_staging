import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavlink extends Component {
	render() {
		// console.log(this.props);
		return (
			<NavLink className="list-group-item" activeClassName="demo" {...this.props}/>
		)
	}
}
