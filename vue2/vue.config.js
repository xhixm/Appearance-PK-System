const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://test.xhixm.com:9000/ssm',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api': ''} // 代理到服务器的时候，去除api路径
      },
    }
  }
})


