import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users,isFirst,isLoading,error} = this.props
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
