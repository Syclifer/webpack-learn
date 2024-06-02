//resolve用来拼接绝对路径
const { resolve } = require('path')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


// const SourcemapPlugin = require('./SourcemapPlugin');

module.exports = {
    // entry: {
    //     app: './src/index.js',
    //     // 模块热替换的运行时代码
    //     // hot: 'webpack/hot/dev-server.js',
    //     // // 用于 web 套接字传输、热重载逻辑的 web server 客户端
    //     // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // },
    entry: './src/index.js',
    devtool: false,
    output: {
        filename: '[name].bundle.js',
        // // __dirname为commonJS变量代表当前文件的目录绝对路径
        path: resolve(__dirname, 'dis1t'),
        // clean: true,
    },
    module: {
        rules: [
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }
        ]
    },
    // devServer: {
    //     static: './dist',
    //     // 用于 web 套接字传输、热重载逻辑的 web server 客户端
    //     // hot: false,
    //     // client: false,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin()

        // new SourcemapPlugin(),
    ],
    mode: 'development'
}