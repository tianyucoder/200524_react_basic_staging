import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

	search = async ()=>{
		//获取用户的输入
		const {value} = this.userInput
		console.log(value);
		//发送请求之前通知List更新状态
		// this.props.updateAppState({isFirst:false,isLoading:true})
		PubSub.publish('update_list_state',{isFirst:false,isLoading:true});
		try {
			const response = await axios.get(`/v1/search/users?q=${value}`)
			//请求成功通知List更新状态
			// this.props.updateAppState({isLoading:false,users:response.data.items})
			PubSub.publish('update_list_state',{isLoading:false,users:response.data.items});
		} catch (error) {
			//请求失败通知List更新状态
			// this.props.updateAppState({isLoading:false,error:error.message})
			PubSub.publish('update_list_state',{isLoading:false,error:error.message});
			
		}
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input type="text" ref={c => this.userInput = c} placeholder="enter the name you search"/>&nbsp;
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}
