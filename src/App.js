import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import Testa from './pages/Test/index2'
import Header from './components/Header'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中使用a标签实现不同页面的跳转 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* react中使用路由链接(Link)进行切换组件 */}
							{/* <NavLink className="list-group-item" to="/about" activeClassName="demo">About</NavLink>
							<NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink> */}
							
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
							<MyNavLink to="/test">Test</MyNavLink>
							<MyNavLink to="/test/a">Test-a</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path='/about' component={About}/>
									<Route path='/home' component={Home}/>
									<Route path='/test' exact={true} component={Test}/>
									<Route path='/test/a' component={Testa}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
