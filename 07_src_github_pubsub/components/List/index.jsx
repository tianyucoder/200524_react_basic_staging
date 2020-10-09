import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = {
		users:[],//存储用户数据
		isFirst:true, //标识是否第一次展示
		isLoading:false, //标识是否处于加载中
		error:'' //错误信息
	}

	componentDidMount(){
	 this.token = PubSub.subscribe('update_list_state', (_,stateObj)=>{
			this.setState(stateObj)
		});
	}

	componentWillUnmount(){
		PubSub.unsubscribe(this.token);
	}

	render() {
		const {users,isFirst,isLoading,error} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>输入关键字，然后点击搜索</h2> :
					isLoading ? <h2>Loading.....</h2> :
					error ? <h2>{error}</h2> :
					users.map((user)=>(
						<div className="card" key={user.login}>
							<a href={user.html_url} rel="noopener noreferrer" target="_blank">
								<img src={user.avatar_url} alt="pic" style={{width: '100px'}}/>
							</a>
							<p className="card-text">{user.login}</p>
						</div>
					))
				}
			</div>
		)
	}
}
