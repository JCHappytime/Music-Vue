const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  // 模式
  mode: "development",
  entry: {
    main: './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {},
  plugins: [
    new UglifyJsPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 9000,
  },
};

