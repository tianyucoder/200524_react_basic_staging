import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	static propTypes = {
		todos:PropTypes.array.isRequired,
		deleteTodo:PropTypes.func.isRequired
	}

	static defaultProps = {
		todos:[]
	}

	render() {
		const {todos,deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todo)=>{
						return <Item key={todo.id} {...todo} deleteTodo={deleteTodo}/>
					})
				}
			</ul>
		)
	}
}
