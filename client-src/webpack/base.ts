import webpack from 'webpack'
import merge from 'webpack-merge'
import path from 'path'
import common from './common'

export default merge(common, {
  entry: ['babel-polyfill', './index.tsx'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader', 'css-loader'],
      },
      {
        test: /\.ejs/,
        use: [
          {
            loader: 'ejs-loader',
            options: {
              interpolate: /<\$=([\s\S]+?)\$>/g,
              evaluate: /<\$([\s\S]+?)\$>/g,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@Common': path.resolve(__dirname, '../../src/common'),
    },
  },
})