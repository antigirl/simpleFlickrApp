var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    quiet: true
}).listen(8000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:8000');
});
