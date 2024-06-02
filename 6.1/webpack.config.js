const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
    }),
    new ModuleFederationPlugin({
      name: "app1", // 当前应用的名称，需要全局一
      filename: "remoteEntry.js", // 共享模块的入口文件
      library: { type: 'var', name: 'app1' }, // 共享模块的全局引用
      exposes: { // 导出的模块，只有在此申明的模块才可以作为远程依赖被使用
        "./Test": "./src/test.js",
      },
    }),
  ],
  devServer: {
    static: './dist',
  },
  devtool: false,
  // devtool: 'source-map',
};