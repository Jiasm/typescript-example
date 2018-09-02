import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import path from 'path'
import common from './common'

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