var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3500',
        'webpack/hot/only-dev-server',
        './src/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'dev_bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.js$/, 
              exclude: /node_modules/, 
              loaders: ['react-hot', 'babel-loader'],
              include: path.join(__dirname, 'src')
            },
            { test: /\.scss$/, 
              loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
