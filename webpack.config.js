const {resolve} = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const env = require('dotenv').config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = env => {
  return {
    entry: resolve('./src/Greetings.js'),
    output: {
      path: resolve('./dist'),
      filename: 'bundle.min.js'
    },
    watch: env.WEBPACK_WATCH == "true",
    mode: env.WEBPACK_MODE,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader"
          },
        }
      ]
    },
    plugins: [
      new Dotenv(),
      new webpack.DefinePlugin(envKeys)
    ]
  }
}
