import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
	render() {
		console.log('Detail的props',this.props);

		//取出params参数
		/* const {id,title} = this.props.match.params */

		//取出search参数
		/* const {search} = this.props.location
		const {id,title} = qs.parse(search.split('?')[1]) */

		//取出location.state参数
		const {location:{state:{id,title}}} = this.props

		return (
			<ul>
				<li>消息id：{id}</li>
				<li>消息标题：{title}</li>
				<li>消息内容：？？？？</li>
			</ul>
		)
	}
}
