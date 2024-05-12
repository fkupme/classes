
const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	stats: { children: true },
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	entry: "./src/main.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			}
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		})
	],
};