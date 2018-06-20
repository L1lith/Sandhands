const merge = require('webpack-merge')
const common = require("./webpack.common.js")
process.env.NODE_ENV = process.env.NODE_ENV || "development"
const environment = require(`./webpack.${process.env.NODE_ENV}.js`)

module.exports = merge(common, environment)
