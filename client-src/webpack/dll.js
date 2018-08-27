const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const common = require('./common')

module.exports = merge(common, {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'react-router-dom',
      'babel-polyfill',
    ],
  },
  output: {
    filename: 'vendors.dll.js',
    path: path.resolve(__dirname, '../../client-dist'),
    library: 'vendors_lib',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, '../dist/vendors-manifest.json'),
      name: 'vendors_lib',
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
      },
    }),
  ],
})