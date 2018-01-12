const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
	entry: {
		app: './src/main.js',
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: path.resolve('dist')
	},
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [path.resolve('src'), path.resolve('test')]
			},
			{ 
				test: /\.js$/,
				loader: 'babel-loader',
				include: [path.resolve('src')]
			}
		]
	}
}

module.exports = webpackConfig