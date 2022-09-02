const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname__, './src/index.js'),
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: ['bundle.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
  },
  devServer: {
    path: path.resolve(__dirname,'./dist'),
    port: 5055
  },
}