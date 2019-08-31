const webpack = require('webpack');
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径 baseURL已经过时
  publicPath: './',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
  },

  configureWebpack: {//引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },

  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  css: {
    loaderOptions: {
      /* sass: {
        data: `@import "@assets/style/variables.scss";@import "@assets/style/mixins.scss";`,
      } */
    }
  },

  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    // host: '192.168.4.5',//如果是真机测试，就使用这个IP
    // port: 8282,
    // https: false,
    // hotOnly: false,
    disableHostCheck: true,
    // proxy: null, // 设置代理
  },

  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}