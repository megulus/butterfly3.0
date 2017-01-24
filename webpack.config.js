"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');


// local scss modules
loaders.push({
	test: /\.scss$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
		'postcss',
		'sass'
	]
});

// local css modules
loaders.push({
	test: /\.css$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
		'postcss'
	]
});

module.exports = {
	entry: [
		'babel-polyfill',
		'./project/js/client.jsx'
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		path: path.resolve(__dirname, 'public/'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: './project/template.html'
		}),
	]
};
