import React, { Component } from 'react'
import qs from 'querystring'


const detailList = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的女朋友'},
	{id:'04',content:'你好，最好的自己'},
]
export default class Detail extends Component {
	render() {
		console.log('Detail的props',this.props);

		//取出params参数
		const {id,title} = this.props.match.params

		//取出search参数
		// const {search} = this.props.location
		// const {id,title} = qs.parse(search.split('?')[1])

		//取出location.state参数
		// const {location:{state:{id,title}}} = this.props

		//查找
		const result = detailList.find(d => d.id === id) || {}

		return (
			<ul>
				<li>消息id：{id}</li>
				<li>消息标题：{title}</li>
				<li>消息内容：{result.content}</li>
			</ul>
		)
	}
}
