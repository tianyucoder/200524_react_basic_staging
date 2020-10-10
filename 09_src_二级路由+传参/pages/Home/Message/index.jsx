import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	state = {
		messageList:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
			{id:'04',title:'消息4'},
		]
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageList.map( msg =>(
							<li key={msg.id}>
								{/* 携带params参数 */}
								{/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

								{/* 携带search参数 */}
								{/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

								{/* 携带location.state参数 */}
								<Link to={{pathname:'/home/message/detail',state:{id:msg.id,title:msg.title}}}>{msg.title}</Link>

							</li>
						))
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数,无需声明接收，直接注册即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* location.state参数,无需声明接收，直接注册即可 */}
				<Route path="/home/message/detail" component={Detail}/>

			</div>
		)
	}
}
