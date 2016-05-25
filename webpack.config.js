var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'app'),
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://1localhost:8000',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'react-hot',
            include: path.join(__dirname, 'app')
        }, {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/
        }, {
            test: /\.*css$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader?'
        }]
    }
};
