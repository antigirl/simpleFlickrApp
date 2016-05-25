var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'app'),
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CleanWebpackPlugin(['dist'], {
              root: __dirname
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'index.html'),
            to: path.join(__dirname, 'dist','index.html')
        }])
    ],
    module: {
        loaders: [ {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/
        }, {
            test: /\.*css$/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'file-loader?'
        }]
    }
};
