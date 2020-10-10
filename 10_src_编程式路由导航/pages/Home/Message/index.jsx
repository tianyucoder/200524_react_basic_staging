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

	showMsg = (id,title,isPush)=>{
		return ()=>{
				//使用push跳转，携带state参数
				// this.props.history.push('/home/message/detail',{id,title})

				//使用push跳转，携带params参数
				if(isPush) this.props.history.push(`/home/message/detail/${id}/${title}`)
				else this.props.history.replace(`/home/message/detail/${id}/${title}`)
				

				//使用push跳转，携带search参数
				// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
		}
	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(-2)
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<ul>
					{
						this.state.messageList.map( msg =>(
							<li key={msg.id}>
								{/* 携带params参数 */}
								<Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>

								{/* 携带search参数 */}
								{/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

								{/* 携带location.state参数 */}
								{/* <Link to={{pathname:'/home/message/detail',state:{id:msg.id,title:msg.title}}}>{msg.title}</Link> */}
								&nbsp;<button onClick={this.showMsg(msg.id,msg.title,true)}>push查看</button>
								&nbsp;<button onClick={this.showMsg(msg.id,msg.title,false)}>replace查看</button>
							</li>
						))
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				<Route path="/home/message/detail/:id/:title" component={Detail}/>

				{/* search参数,无需声明接收，直接注册即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* location.state参数,无需声明接收，直接注册即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}
				
				<button onClick={this.back}>回退</button>
				<button onClick={this.forward}>前进</button>
				<button onClick={this.go}>试一试这个go</button>
			</div>
		)
	}
}
