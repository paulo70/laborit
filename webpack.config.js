const modeDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modeDev ? 'development' : 'production',
  entry: './src/index.js',

  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },

  devServer: {
    port: 3000,
    contentBase: './public',
    historyApiFallback: true
  },

  resolve: {
    alias: {
      modules: __dirname + '/node_modules'
    },
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}