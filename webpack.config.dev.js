var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: ['file?name=images/[name]-[hash:base64:5].[ext]']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('precss'),
      require('stylelint')
    ];
  }
};
