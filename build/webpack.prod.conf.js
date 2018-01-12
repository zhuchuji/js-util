const webpackMerge = require('webpack-merge')
const path = require('path')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common.conf.js')
const webpack = require('webpack')

const prodConfig = webpackMerge(commonConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new cleanWebpackPlugin(['dist'], { root: path.resolve('.') }),
		new uglifyJsPlugin({
			sourceMap: true
		}),
	]
})

module.exports = prodConfig