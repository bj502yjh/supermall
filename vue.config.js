// 此处的vue.config.js 会和默认的 vue.config 合并
module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
      // alias: {
      //   '@': resolve('src'),
      //   'assets': resolve('src/assets'),
      //   'components': resolve('src/components'),
      //   'views': resolve('src/views'),
      // }
    }
  }
}