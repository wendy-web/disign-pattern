const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    plugins: [
        // 将./src/index.js插入到html的模板中
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, './release'), // 根目录；课程中的contentBase更改为static
        open: true, // 自动打开浏览器
        port: 9000,
    }
}