const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // 旧版本直接使用proxy()，新版本使用proxy.createProxyMiddleware()
        proxy.createProxyMiddleware('/api1', {  // 遇见api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000',    // 请求转发给谁
            changeOrigin: true, // 默认值为false，控制服务器收到请求头中Host字段的值
            pathRewrite: {'^/api1': ''} // 重写请求路径
        }),
        proxy.createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}