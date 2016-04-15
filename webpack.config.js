var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var commonLoaders = [
  { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
];

module.exports = [
  {
    // The configuration for the client-side rendering
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: 'bundle.js'
    },
    module: {
      loaders: commonLoaders
    }
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
    }
  }
];
