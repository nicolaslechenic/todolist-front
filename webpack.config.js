const {resolve} = require('path')
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: resolve('./src/Greetings.js'),
  output: {
    path: resolve('./dist'),
    filename: 'bundle.min.js'
  },
  watch: true,
  mode: "development",
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
    new Dotenv()
  ]
}
