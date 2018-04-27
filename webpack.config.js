const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{

  mode: 'development',

  entry: {
    'index.js': './src/main/ts/index.tsx'
  },

  output: {
    path: `${__dirname}/public/dbf`,
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ],
  },
  devtool: 'source-map'
},/*{
  mode: 'development',

  entry: {
    'style.css': './src/main/scss/main.scss'
  },

  output: {
    path: `${__dirname}/public`,
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  resolve: {
    extensions: [
      'scss','sass'
    ],
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin({
      filename: '[name]',
      allChunks: false
    })
  ]
}*/];
