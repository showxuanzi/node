import express from 'express'// 导入express依赖
import bodyParser from "body-parser"//http 请求参数解析
import util from "util" // 导入node中的promise
import logger from "../app/util/logger"


export default () => {
    var app = express(); // 生成实例
    // 跨域处理
    var allowCrossDomain = function(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.setHeader("Access-Control-Allow-Methods","*");
        res.setHeader("Access-Control-Allow-Headers","*");
        next();
    };
    app.use(allowCrossDomain);

    app.use(bodyParser.json()); // 解析前端发送的json数据
    app.use(bodyParser.urlencoded({extended: true})); //解析前端发表单数据
    logger.info("配置跨域处理");
    //  定义接口
    app.get("/",function(req,res){
        res.send("Index");
    });
    logger.info("配置路由");
    // 使用promise方式将app.listen导出
    app.listenAsync = util.promisify(app.listen);
    
    return app;
    //app.listen(3000,function(){console.log("Server started on port 3000")});
}