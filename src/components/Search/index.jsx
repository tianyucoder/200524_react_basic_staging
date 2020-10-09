import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		//1.获取用户的输入
		const {value} = this.userInput
		console.log(value);
		//发送请求之前更新状态
		this.props.updateAppState({isFirst:false,isLoading:true})
		//2.发送请求
		axios.get(`/v1/search/users?q=${value}`).then(
			response => {
				console.log('成功了',response.data);
				//3.维护数据到状态
				this.props.updateAppState({isLoading:false,users:response.data.items})
			},
			error => {
				console.log('失败了',error.message);
				//请求失败维护错误信息
				this.props.updateAppState({isLoading:false,error:error.message})
			}
		)
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
