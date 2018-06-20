const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const {resolve} = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "source.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CopyWebpackPlugin([
      { from: resolve(__dirname, 'static/') }
    ])
  ],
  mode: process.env.NODE_ENV,
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
