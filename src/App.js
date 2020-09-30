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
			{id:'0002',name:'睡觉',completed:true},
			{id:'0003',name:'打龙哥',completed:false}
		]
	}

	addTodo = (name)=>{
		const todoObj = {id:nanoid(),name,completed:false}
		const {todos} = this.state
		this.setState({todos:[todoObj,...todos]})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
