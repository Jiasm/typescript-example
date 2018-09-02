import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin'
import baseConfig from './base'

const manifest = require('../dist/vendors-manifest.json')

export default merge(baseConfig, {
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
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest,
    }),
  ],
})