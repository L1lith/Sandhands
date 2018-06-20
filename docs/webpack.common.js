const {resolve} = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "source.js"
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }]
  }
}
