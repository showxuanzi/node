## 重构express-run

## 创建.babelrc文件
- 安装解析es6的模块
- npm i -S babel-cli babel-preset-env babel-plugin-add-module-exports 
- 安装插件 npm i -S babel-node,它会在运行时使用.babelrc文件，将代码进行编译
- 在根目录下添加入口文件 main.js

- 运行main.js 
- 在packgae.json中添加命令 start：babel-node main.js

## 将app.listen 以promise的形式导出
- 在node 8 以后有util.promisify方法，在入口出运行服务
- 异步执行端口监听，这样可以保证main.js执行完所有配置文件最后再监听

## 创建日志信息 (winston)
- 安装依赖 npm i -S winston
- 添加日志配置文件 app-util-logger.js
- 日志文件两种格式： 控制台输出（便于开发调试），文件格式（上线维护）
- 日志生成的两种形式：按大小（达到某一值重新生成），按时间（每天或每周）

## 可配置性