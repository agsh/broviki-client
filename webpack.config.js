const webpack = require('webpack')
	, path = require('path')
	;

const APP_DIR = path.resolve(__dirname, 'src')
	;

const config = {
	entry: APP_DIR + '/app.js',
	devtool: 'source-map',
	devServer: {
		inline: true,
		historyApiFallback: true,
		contentBase: './'
	},
	output: {
		path: __dirname,
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: APP_DIR,
				loader: 'babel'
			}
		]
	}
};

module.exports = config;
