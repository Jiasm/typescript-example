const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const baseConfig = require('./base.js')

module.exports = merge(baseConfig, {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../client-dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // isProduction ? '[name]-[hash].[ext]' :
              name: '[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.ejs'),
      filename: path.resolve(__dirname, '../../views/index.ejs'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../../client-dist/vendors.dll.js'),
      includeSourcemap: false,
    }),
    new webpack.WatchIgnorePlugin([
      /\.ejs$/,
      /\.js$/,
    ]),
  ],
})