'use strict';

const path = require('path');
const pathTo = p => path.resolve(process.cwd(), p);
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const NODE_ENV = 'development';

module.exports = {
  // entry: ['./test_utils/test.index.js'],
  target:        'node',
  devtool:       'cheap-module-source-map',
  externals:     [nodeExternals()],
  // output: {
  //   path: pathTo('./tmp'),
  //   filename: 'test.bundle.js',
  //   devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  //   devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  // },
  module:        {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  'babel?cacheDirectory'
      },
      {
        test:   /\.s?css$/,
        loader: 'null'
      },
      {
        test:   /\.(eot|svg|ttf|woff|json|png|jpg|idl)$/,
        loader: 'null'
      },
      {
        test:   /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve:       {
    extensions: ['', '.js', '.jsx', '.scss'],
    root:       pathTo('./src/')
  },
  resolveLoader: {
    fallback: [pathTo('./node_modules')]
  },
  sassLoader:    {
    includePaths: [pathTo('./src')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':          Object.keys(process.env).reduce(function (o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {}),
      // NODE_ENV не всегда передается при запуске, поэтому присваем принудительно
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      GA_CONFIG:              {},
      DEVELOPMENT:            NODE_ENV === 'development'
    })
  ]
};