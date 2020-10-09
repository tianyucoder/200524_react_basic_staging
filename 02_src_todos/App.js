import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

	state = {
		todos:[
			{id:'0001',name:'吃饭',completed:true},
			{id:'0002',name:'睡觉',completed:false},
			{id:'0003',name:'打龙哥',completed:true}
		]
	}

	//添加一个todo
	addTodo = (name)=>{
		const todoObj = {id:nanoid(),name,completed:false}
		const {todos} = this.state
		this.setState({todos:[todoObj,...todos]})
	}

	//删除一个todo
	deleteTodo = (id)=>{
		const {todos} = this.state
		const formatedTodos = todos.filter((todo)=>{
			return todo.id !== id
		})
		this.setState({todos:formatedTodos})
	}

	//勾选 取消勾选 一个todo
	handleTodoChange = (id,completed)=>{
		const {todos} = this.state
		const formatedTodos = todos.map((todo)=>{
			if(todo.id === id) return {...todo,completed}
			return todo
		})
		this.setState({todos:formatedTodos})
	}

	handleAllChange = (completed)=>{
		const todos =  this.state.todos.map((todo)=>{
			return {...todo,completed}
		})
		this.setState({todos})
	}
	
	clearAllCompleted = ()=>{
		const todos = this.state.todos.filter((todo)=>{
			return !todo.completed
		})
		this.setState({todos})
	}


	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} deleteTodo={this.deleteTodo} handleTodoChange={this.handleTodoChange}/>
					<Footer todos={this.state.todos} handleAllChange={this.handleAllChange} clearAllCompleted={this.clearAllCompleted}/>
				</div>
			</div>
		)
	}
}