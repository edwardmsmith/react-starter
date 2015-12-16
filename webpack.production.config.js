var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    // Camayak custom code
    app: path.resolve(__dirname, './src/client'),
    // Dependencies go into a different file
    vendors: [
      'babel-polyfill',
      'history',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-router',
      'redux-thunk'
      ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
      },
      { test: /\.scss$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = config;