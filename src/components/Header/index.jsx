import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}
	render() {
		// console.log('Header',this.props);
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>回退</button>
				<button onClick={this.forward}>前进</button>
			</div>
		)
	}
}

//withRouter是高阶组件
/* 高阶组件的定义：
			如果一个函数，能接受一个组件作为参数，且返回一个组件，那么该函数就是高阶组件。
			补充：高阶组件是一个特殊的高阶函数
*/
export default withRouter(Header)
