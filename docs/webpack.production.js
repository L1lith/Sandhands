const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  plugins: [new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      }
    }
  })]
}
