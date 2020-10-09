//引入react核心库
import React from 'react'
//1.引入App
import App from './App'
//2.引入ReactDOM
import ReactDOM from 'react-dom'
//引入BrowserRouter
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root'))