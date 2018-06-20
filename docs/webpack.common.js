const CopyWebpackPlugin = require('copy-webpack-plugin')
const {resolve} = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "source.js"
  },
  plugins: [
      new CopyWebpackPlugin([
          { from: resolve(__dirname, 'static/') }
      ])
  ],
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
