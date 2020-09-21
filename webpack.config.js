const { resolve } = require('path')
const Dotenv = require("dotenv-webpack")

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
    plugins:  [
      new Dotenv({path: `./.env.${env.WEBPACK_MODE}`})
    ]
  }
}
