import React, { Component } from 'react'
// import axios from 'axios'

export default class Search extends Component {

	search = async ()=>{
		//1.获取用户的输入
		const {value} = this.userInput
		console.log(value);
		//发送请求之前更新状态
		this.props.updateAppState({isFirst:false,isLoading:true})
		//#region 2.axios发送请求
		/* try {
			const response = await axios.get(`/v1/search/users?q=${value}`)
			this.props.updateAppState({isLoading:false,users:response.data.items})
		} catch (error) {
			this.props.updateAppState({isLoading:false,error:error.message})
		} */
		//#endregion
		//#region 使用fetch发送请求
		/* fetch(`/v1/search/users2?q=${value}`).then(
			response => {
				console.log('联系服务器成功了',response)
				return response.json()
			},
		).then(
			response => console.log('数据获取成功了',response),
		).catch(
			(error)=>{
				console.log('失败了',error);
				return new Promise(()=>{})
			}
		) */
		//#endregion
		
		try {
			const response =  await fetch(`/v1/search/users2?q=${value}`)
			const data = await response.json()
			console.log(data);
		} catch (error) {
			console.log('请求异常',error);
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
