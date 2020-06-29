import express from "./config/myexpress"
import logger from "./app/util/logger"
const server = express();

// 配置文件处理 
const port = 3000; // 端口号

// 异步执行端口监听
server.listenAsync(port).then(() =>{ // server.listenAsync 就相当于一个promise
    logger.info("服务启动,端口3000")
}); 