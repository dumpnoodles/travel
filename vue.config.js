const path = require('path');
const cityData = require('./mock/city.json');
const detailData = require('./mock/detail.json');
const indexData = require('./mock/index.json');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // css相关配置
  css: {
    // css预设器配置项
    loaderOptions: {
      stylus: {
        prependData: `@import "./src/assets/styles/varibles.styl";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {
      app.get('/api/cityData', function (req, res) {
        res.json({
          errno: 0,
          data: cityData
        })
      })
      app.get('/api/detailData', function (req, res) {
        res.json({
          errno: 0,
          data: detailData
        })
      })
      app.get('/api/indexData', function (req, res) {
        res.json({
          errno: 0,
          data: indexData
        })
      })
    }
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        'styles': path.resolve(__dirname, './src/assets/styles'),
        'api': path.resolve(__dirname, './src/api')
      }
    }
  },
}
