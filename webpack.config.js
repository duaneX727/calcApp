const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const path = require('path');
let mode = "development";
// i
module.exports = {
  mode: process.env.NODE_ENV === "production" ?  "production": "development",

  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {   
        test:/\.css$/i,
        use:[{
          loader:  MiniCssExtractPlugin.loader,
          options: {publicPath: ""}
        },"css-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "main.css"
  }), new HtmlWebpackPlugin({
    title: "Calc App Project",
    filename: 'index.html',
    template: path.resolve(__dirname, 'src/index.html')
  })],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    // static: "./dist",
    port: 5055
  }
}
