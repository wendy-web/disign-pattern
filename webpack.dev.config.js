const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入多页面文件列表
const config = require("./config");
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {}
// 生成多页面的集合
config.HTMLDirs.forEach((page) => {
    const htmlPlugin = new HTMLWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(__dirname, `src/modules/${page}/index.html`),
        chunks: [page, 'commons'],
    });
    HTMLPlugins.push(htmlPlugin);
    Entries[page] = path.resolve(__dirname, `src/modules/${page}/index.js`);
})
module.exports = {
    entry: Entries,
    // entry: './src/index.js',
    // output: {
    //     path: __dirname,
    //     filename: './release/bundle.js'
    // },
    output:{
        filename:"js/[name].bundle.[hash].js",
        path:path.resolve(__dirname,"../dist")
    },
    module:{
        rules: [{ // 检验规则，将js的文件中es5的语法转变成es6
            test: /\.js?$/,
            exclude: /(node_modules)/, // 略过的文件
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        // 将./src/index.js插入到html的模板中
        // new HTMLWebpackPlugin({
        //     template: './index.html'
        // })
        ...HTMLPlugins
    ],
    devServer: {
        static: path.join(__dirname, './release'), // 根目录；课程中的contentBase更改为static
        open: true, // 自动打开浏览器
        port: 9000,
    }
}