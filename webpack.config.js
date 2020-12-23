const { resolve } = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/app.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
