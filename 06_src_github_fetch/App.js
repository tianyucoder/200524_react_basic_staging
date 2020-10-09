import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

	state = {
		users:[],//存储用户数据
		isFirst:true, //标识是否第一次展示
		isLoading:false, //标识是否处于加载中
		error:'' //错误信息
	}

	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state} />
			</div>
		)
	}
}
