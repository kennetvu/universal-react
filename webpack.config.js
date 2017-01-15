const webpack = require('webpack');
const path = require('path');
const config = {
  entry: [
    // 'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
    './src/app/browser.js',
  ],
  output: {
    path: '/',
    publicPath: 'http://localhost:3000/assets/',
    //path: path.join(__dirname, '/dist/assets'),
    // publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel'],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};

module.exports = config;