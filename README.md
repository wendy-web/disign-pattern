初始化文件：npm init 一直回车并保存文件
声明：
.开头的文件都是隐藏文件


安装webpack
* 指令：npm install webpack webpack-cli --save-dev --registry=https://registry.npmmirror.com 
后添加的--registry=https://registry.npmmirror.com是taobao镜像使下载更快 
安装成功后，新建webpack.dev.config.js文件，进行模态的书写配置 在package.js中添加："dev": "webpack --config ./webpack.dev.config.js --mode development" 命令行中

2-2 安装html-webpack-plugin的插件，将打包的js插入到html的模板中，并自动更新执行
安装插件：npm install webpack-dev-server html-webpack-plugin --save-dev

2-3 安装babel，兼容es6
npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev
遇到问题：
版本不一致导致报错；

2-4 面向对象总结的[CSDN的文章](https://blog.csdn.net/weixin_42369598/article/details/123367599?spm=1001.2014.3001.5502)
2-11 UML类图的使用总结；[UML类图使用总结CSDN](https://editor.csdn.net/md/?articleId=123368993)

[点击进入UML的网址](https://www.processon.com/history)
3设计模式的使用
打车的面试题：
画出UML图
-------
### 补充配置文件进行
1. 安装样式处理相关插件
npm install css-loader style-loader postcss-loader autoprefixer --save-dev
这系列插件用来处理 CSS 样式，其中 autoprefixer 是 postcss 的一个插件，用来自动给 CSS 样式添加前缀。
2. 安装 file-loader
该插件将在导入图片、字体等文件时发挥作用。PS.您也可以安装 url-loader 以实现相同的作用：

npm install file-loader --save-dev
npm install file-loader --save-dev

3. 安装 ESLint 相关的插件
npm install eslint eslint-loader --save-dev
这些插件用来对 JavaScript 代码进行检查。

4. 安装 extract-text-webpack-plugin 插件
npm install extract-text-webpack-plugin --save-dev
该插件用来将 CSS 抽取到独立的文件。

5. 安装 clean-webpack-plugin 插件
npm install clean-webpack-plugin --save-dev
该插件用来对 dist 文件夹进行清理工作，每次打包时先清理之前的 dist 文件夹。