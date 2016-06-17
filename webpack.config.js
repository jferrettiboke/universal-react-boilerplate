var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonLoaders = [
  {
    test: /\.jsx?$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
      'postcss'
    )
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    loaders: ['file?name=images/[name]-[hash:base64:5].[ext]']
  },
  {
    test: /\.json$/,
    loaders: ['json']
  }
];

var postCSSConfig = function () {
  return [
    require('autoprefixer'),
    require('precss')
  ];
};

module.exports = [
  {
    // The configuration for the client-side rendering
    entry: [
      'react-hot-loader/patch',
      path.resolve(__dirname, './src/client/index.js')
    ],
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: 'bundle.js'
    },
    module: {
      loaders: commonLoaders
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('css/styles.min.css'),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    postcss: postCSSConfig
  },
  {
    // The configuration for the server-side rendering
    entry: path.resolve(__dirname, './src/server/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js'
    },
    target: 'node',
    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
      'react-dom/server'
    ]).reduce(function (ext, mod) {
      ext[mod] = 'commonjs ' + mod
      return ext
    }, {}),
    node: {
      __filename: true,
      __dirname: true
    },
    module: {
      loaders: commonLoaders
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new ExtractTextPlugin('public/css/styles.min.css'),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
];
