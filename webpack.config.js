//resolve用来拼接绝对路径
const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        // // __dirname为commonJS变量代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [],
    mode: 'development'
}