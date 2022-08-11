const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    open: true
  }
}
