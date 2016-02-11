var path        = require('path');

module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react','es2015']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};
