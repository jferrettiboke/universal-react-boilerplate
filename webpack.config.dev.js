var path = require('path');
var webpack = require('webpack');

var PATHS = {
  app: path.join(__dirname, 'src')
}

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss'
        ],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  eslint: {
    configFile: './.eslintrc.json'
  },
  postcss: function () {
    return [
      require('autoprefixer'),
      require('precss'),
      require('stylelint')({
        "extends": "stylelint-config-standard",
        "rules": {}
      })
    ];
  }
};
