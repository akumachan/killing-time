module.exports = {
  publicPath: './',
  outputDir: 'docs',
  configureWebpack: {
    resolve: {
      alias: {
        'va': 'vue2-admin-lte/src'
      }
    }
  }
}