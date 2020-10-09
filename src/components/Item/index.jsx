import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {
		backgroundColor:'white',
		display:'none'
	}

	handleMouse = (isEnter)=>{
		return ()=>{
			this.setState({
				backgroundColor: isEnter ? '#ddd' :'white',
				display:isEnter ? 'block' :'none',
			})
		}
	}

	handleDelete = (id)=>{
		if(window.confirm('确定删除吗？')){
			//通知App删除指定id的todo对象
			this.props.deleteTodo(id)
		}
	}

	handleChange = (id,e)=>{
		//通知App给指定的todo勾选/取消勾选
		this.props.handleTodoChange(id,e.target.checked)
	}

	render() {
		const {id,name,completed} = this.props
		const {display,backgroundColor} = this.state
		return (
			<li style={{backgroundColor}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={completed} onChange={(e)=>this.handleChange(id,e)}/>
					<span>{name}</span>
				</label>
				<button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display}}>删除</button>
			</li>
		)
	}
}
