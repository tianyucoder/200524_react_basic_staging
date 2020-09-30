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


	render() {
		const {id,name} = this.props
		const {display,backgroundColor} = this.state
		return (
			<li style={{backgroundColor}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox"/>
					<span>{name}</span>
				</label>
				<button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display}}>删除</button>
			</li>
		)
	}
}
