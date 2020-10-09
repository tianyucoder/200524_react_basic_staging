import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	componentDidMount(){
		axios({
			url:'/demo1/students',
			method:'GET'
		}).then(
			response => {console.log('成功',response.data);},
			error => {console.log('失败',error);}
		)
		axios({
			url:'/demo2/cars',
			method:'GET'
		}).then(
			response => {console.log('成功',response.data);},
			error => {console.log('失败',error);}
		)
	}

	render() {
		return (
			<div>
				App....
			</div>
		)
	}
}
