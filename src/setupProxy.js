const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/demo1',{
			target:"http://localhost:5000", //转发请求给谁(所有带有demo1前缀的请求都会转发给5000)
			changeOrigin:true,
			pathRewrite:{'^/demo1': ''}
		}),
		proxy('/demo2',{
			target:"http://localhost:5001", //转发请求给谁(所有带有demo2前缀的请求都会转发给5001)
			changeOrigin:true,
			pathRewrite:{'^/demo2': ''}
		})
	)
}