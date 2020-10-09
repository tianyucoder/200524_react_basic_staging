import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	handleAllChange = (e)=>{
		//通知App将所有的todo全都表示为：完成/未完成
		this.props.handleAllChange(e.target.checked)
	}

	clearAllCompleted = ()=>{
		//通知App清除所有已完成
		this.props.clearAllCompleted()
	}

	render() {
		const {todos} = this.props
		const total = todos.length //总数
		const completedTotal = todos.reduce((pre,todo)=> pre + (todo.completed ? 1 : 0) ,0)
		console.log('%%',completedTotal === total);
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={ completedTotal === total && total>0} onChange={this.handleAllChange}/>
				</label>	
				<span>
					<span>已完成{completedTotal}</span> / 全部{total}
				</span>
				<button className="btn btn-danger" onClick={this.clearAllCompleted}>清除已完成任务</button>
			</div>
		)
	}
}
