初始化文件：npm init 一直回车并保存文件

安装webpack： npm install webpack webpack-cli --save-dev --registry=https://registry.npmmirror.com 后添加的--registry=https://registry.npmmirror.com是taobao镜像使下载更快 安装成功后，新建webpack.dev.config.js文件，进行模态的书写配置 在package.js中添加："dev": "webpack --config ./webpack.dev.config.js --mode development" 命令行中

安装插件： npm install webpack-dev-serve html-webback-plugin --save-dev
