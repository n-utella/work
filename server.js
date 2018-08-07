var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    host: '13.125.162.189',
    disableHostCheck: true,
    inline: true,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(8000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:8000');
});
