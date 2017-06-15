'use strict';

const nodeExternals = require('webpack-node-externals');

module.exports = {
  //entry: ['./test/test.index.js'],
  target:        'node',
  externals:     [nodeExternals()],
  module:        {
    rules: [

      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'babel-loader'
      },
      {
        test:   /\.css$/,
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

  plugins: [

  ]
};