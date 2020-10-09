## 1.todosList案例注意事项
			1.yarn add prop-types，用于做标签属性的限制
			2.yarn add nanoid，用于生成唯一标识
			3.做参数限制时，限制函数类型，要用：xxxx:PropTypes.func
			4.注意一个小问题：input框的defaultValue和value

## 2.react脚手架配置代理总结
### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）1


### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/v1', {  //v1是需要转发的请求(所有带有v1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/demo': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/v2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/test': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。


## 3.fetch发送请求(不常用)
			(1).fetch的设计是“关注分离”思想
			(2).fetch也是Promise风格的api
			(3).第一次返回的Promise实例标识联系服务器是否成功
			(4).response.json()返回的Promise实例标识数据是否获取成功

## 4.路由的基本使用
			(1).明确好界面中的导航区、展示区
			(2).导航区的a标签改为Link标签
						<Link to="/xxxxx">Demo</Link>
			(3).展示区写Route标签进行路径的匹配
						<Route path='/xxxx' component={Demo}/>
			(4).备注为了“一劳永逸”的解决问题，我们在<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 5.封装NavLink
			通过this.props.children可以获取标签体内容

## 6.路由组件与一般组件：
			(1).写法不同：
						一般组件：<Demo/>
						路由组件：<Route path='/xxxxx' component={Demo}/>
			(2).接收到的props不同
						一般组件：写标签的时候传递了什么就能接到什么
						路由组件：多了三个属性
									history:
											go: ƒ go(n)
											goBack: ƒ goBack()
											goForward: ƒ goForward()
											location: 和下面的location一样
											push: ƒ push(path, state)
											replace: ƒ replace(path, state)
									location:
											pathname: "/about"
											search: ""
											state: null
									match:
											params: {}
											path: "/about"
											url: "/about"
			(3).存放位置不同
						一般组件：components
						路由组件：pages
					