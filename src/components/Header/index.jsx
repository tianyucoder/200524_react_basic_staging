import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

	handleKeyUp = (event)=>{
		if(event.keyCode !== 13) return
		//1.获取用户输入
		const {target:{value}} = event
		//2.校验数据
		if(!value.trim()){
			alert('输入值不能为空')
			return
		}
		//3.通知App追加一个todo
		this.props.addTodo(value)
		//4.清空用户输入
		event.target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}
