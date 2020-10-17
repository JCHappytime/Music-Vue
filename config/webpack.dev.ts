const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
    // 第一次打包速度没什么变化，第二次打包速度会明显提升
    new HardSourceWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 9000,
  },
};
