"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');


// global css
loaders.push({
	test: /\.css$/,
	exclude: /[\/\\]src[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});
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
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap'
	]
});

module.exports = {
	entry: [
		'./project/js/client.jsx'
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		//publicPath: '/',
		//path: path.join(__dirname, 'public'),
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
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './project/template.html'
		}),
	]
};
